import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { to, subject, html } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp-auth.mailprotect.be',
      port: 587,
      secure: false,
      auth: {
        user: 'payment@iptv2belgie.be',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: 'payment@iptv2belgie.be',
      to,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
