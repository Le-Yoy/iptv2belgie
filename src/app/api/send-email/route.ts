import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.iptv2belgie.be',
  port: 465,
  secure: true,
  auth: {
    user: 'payment@iptv2belgie.be',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(request: NextRequest) {
  const { to, subject, html } = await request.json();
  
  try {
    await transporter.sendMail({
      from: 'IPTV2Belgie <payment@iptv2belgie.be>',
      to,
      subject,
      html
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
