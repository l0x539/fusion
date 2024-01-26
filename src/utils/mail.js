import { Resend } from 'resend';

const resend = new Resend('re_Z7ABEUDc_9VAD2X6uZi633UApHy1bN6Be');

resend.emails.send({
  from: 's.nourdin@fusion.bi',
  to: 'contact@fusion.bi',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});