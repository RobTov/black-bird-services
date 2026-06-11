import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const {
    firstName, lastName, pickupDate, pickupTime, pickupLocation,
    destination, serviceType, hours, passengers, phone, email,
  } = req.body;

  if (!firstName || !lastName || !pickupDate || !pickupTime || !pickupLocation || !serviceType || !hours || !passengers || !phone || !email) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const host = process.env.MAILTRAP_HOST || 'live.smtp.mailtrap.io';
  const port = parseInt(process.env.MAILTRAP_PORT || '587', 10);
  const user = process.env.MAILTRAP_USER || 'api';
  const pass = process.env.MAILTRAP_PASS;
  const senderEmail = process.env.MAILTRAP_SENDER || 'info@norbwebsite.com';

  if (!pass) {
    res.status(500).json({ error: 'Missing MAILTRAP_PASS' });
    return;
  }

  const fields = [
    `First Name: ${firstName}`,
    `Last Name: ${lastName}`,
    `Pick Up Date: ${pickupDate}`,
    `Pick Up Time: ${pickupTime}`,
    `Pick Up Location: ${pickupLocation}`,
    `Destination: ${destination || 'N/A'}`,
    `Service Type: ${serviceType}`,
    `Hours: ${hours}`,
    `Passengers: ${passengers}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
  ];

  const text = fields.join('\n');

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: { user, pass },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Black Bird Services" <${senderEmail}>`,
      to: 'tovelrob@proton.me',
      subject: `New Quote Request from ${firstName} ${lastName}`,
      text,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Send error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
