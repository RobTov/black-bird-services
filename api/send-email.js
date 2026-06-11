import { MailtrapClient } from 'mailtrap';

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

  const token = process.env.MAILTRAP_PASS;
  const senderEmail = process.env.MAILTRAP_SENDER || 'info@norbwebsite.com';

  if (!token) {
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
    const client = new MailtrapClient({ token });

    await client.send({
      from: { name: 'Black Bird Services', email: senderEmail },
      to: [{ email: 'tovelrob@proton.me' }],
      subject: `New Quote Request from ${firstName} ${lastName}`,
      text,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Send error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
