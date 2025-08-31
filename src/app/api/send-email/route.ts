import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { to, subject, html } = await request.json();

    // Log for debugging
    console.log('Email request received:', { to, subject });

    const transporter = nodemailer.createTransport({
      host: 'smtp-auth.mailprotect.be',
      port: 587,
      secure: false,
      auth: {
        user: 'payment@iptv2belgie.be',
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: '"IPTV2Belgie" <payment@iptv2belgie.be>',
      to,
      subject,
      html,
    });

    console.log('Email sent:', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
