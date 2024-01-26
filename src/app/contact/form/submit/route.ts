import { Resend } from 'resend';
import { NextResponse } from 'next/server'
import { AppContext } from 'next/app';
const resend = new Resend('re_Z7ABEUDc_9VAD2X6uZi633UApHy1bN6Be');


export async function POST(request: Request, context: AppContext) {
  const {
    name,
    organization,
    email,
    message
  } = await request.json();

  try {
    await resend.emails.send({
      from: `${name} <s.nourdin@fusion.bi>`,
      to: 'contact@fusion.bi',
  
      subject: 'Website contact ('+organization+')',
      text: `organisation: ${organization}
  
  
      ${message}`,
      // react: EmailTemplate({ firstName: 'John' }),
    });
  
    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'error' }, { status: 500 });
  }
}