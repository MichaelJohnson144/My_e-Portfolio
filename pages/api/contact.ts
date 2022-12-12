import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function contact(_req: NextApiRequest, res: NextApiResponse) {
  const { fullName, email, subject, message } = _req.body;
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: `${fullName}, <${email}>`,
      to: '@gmail.com',
      subject: `${subject}`,
      html: `<p>${message}</p>`,
    });
    console.log('Your email was sent successfully', emailRes.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(_req.body);
}
