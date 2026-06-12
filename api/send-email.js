import { Resend } from 'resend';

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

  const apiKey = process.env.RESEND_API_KEY;
  const senderEmail = process.env.RESEND_SENDER || 'info@dallasblackbird.com';

  if (!apiKey) {
    res.status(500).json({ error: 'Missing RESEND_API_KEY' });
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
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `"Black Bird Services" <${senderEmail}>`,
      to: 'tovelrob@proton.me',
      subject: `New Quote Request from ${firstName} ${lastName}`,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      res.status(500).json({ error: error.message });
      return;
    }

    console.log('Resend response:', JSON.stringify(data));
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Send error:', err.message);
    res.status(500).json({ error: err.message });
  }
}
