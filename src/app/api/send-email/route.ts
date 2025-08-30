// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Try different configurations based on Combell's requirements
const transporter = nodemailer.createTransport({
  host: 'mail.iptv2belgie.be', // or 'smtp.combell.com'
  port: 465, // or try 587
  secure: true, // true for 465, false for 587
  auth: {
    user: 'payment@iptv2belgie.be',
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Sometimes needed for Combell
  },
});

export async function POST(request: NextRequest) {
  const { to, subject, html } = await request.json();

  // Check if password is configured
  if (!process.env.EMAIL_PASSWORD) {
    console.error('EMAIL_PASSWORD not configured');
    return NextResponse.json(
      {
        success: false,
        error: 'Email configuration missing',
      },
      { status: 500 }
    );
  }

  try {
    const info = await transporter.sendMail({
      from: 'IPTV2Belgie <payment@iptv2belgie.be>',
      to,
      subject,
      html,
    });

    console.log('Email sent successfully:', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error('Email error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      command: error.command,
    });

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}
