import nodemailer from 'nodemailer';
import config from '../config/config.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: config.GOOGLE_USER,
    clientId: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    refreshToken: config.GOOGLE_REFRESH_TOKEN,
  },
});

export const sendEmail = async (to, subject, html, text) => {
  try {
    const info = await transporter.sendMail({
      from: `"Your name" <${config.GOOGLE_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview url: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};
