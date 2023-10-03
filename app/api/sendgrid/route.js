import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const res = await request.json();

  try {
    const { email, message, name } = res;
    const msg = {
      to: 'kev.sunlee@gmail.com',
      from: 'contact_form@nlvcbridge.com',
      subject: `New Contact Form Submission`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    await sgMail.send(msg);
    return NextResponse.json({ now: Date.now() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
