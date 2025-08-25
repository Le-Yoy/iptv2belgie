import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Get next customer number
    const { data: sequenceData } = await supabaseAdmin.rpc(
      'get_next_customer_number'
    );

    const customerNumber = sequenceData || 3278;

    // Extract device count from plan_id
    const deviceMatch = body.planId.match(/(\d+)-device|(\d+)d/);
    const deviceCount = deviceMatch
      ? parseInt(deviceMatch[1] || deviceMatch[2])
      : 1;

    // Create order
    const { data, error } = await supabaseAdmin
      .from('orders')
      .insert({
        customer_number: customerNumber,
        email: body.email,
        phone: body.phone || null,
        plan_id: body.planId,
        plan_duration: body.planDuration,
        plan_price: body.planPrice,
        device_count: deviceCount,
        language: body.language,
        status: 'pending',
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Check for admin authentication
  const authHeader = request.headers.get('authorization');

  try {
    const { data, error } = await supabaseAdmin
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
