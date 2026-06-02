export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    firstName, lastName, pickupDate, pickupTime, pickupLocation,
    destination, serviceType, hours, passengers, phone, email,
  } = req.body;

  if (!firstName || !lastName || !pickupDate || !pickupTime || !pickupLocation || !serviceType || !hours || !passengers || !phone || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const fields = {
    'First Name': firstName,
    'Last Name': lastName,
    'Pick Up Date': pickupDate,
    'Pick Up Time': pickupTime,
    'Pick Up Location': pickupLocation,
    'Destination': destination || 'N/A',
    'Service Type': serviceType,
    'Hours': hours,
    'Passengers': passengers,
    'Phone': phone,
    'Email': email,
  };

  const rows = Object.entries(fields)
    .map(([label, value]) =>
      `<tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;width:40%;">${label}</td><td style="padding:8px 12px;border:1px solid #ddd;">${value}</td></tr>`
    )
    .join('');

  const html = `<h2>New Quote Request - Black Bird Services</h2><table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">${rows}</table>`;

  try {
    const response = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': process.env.MAILTRAP_API_TOKEN || '',
      },
      body: JSON.stringify({
        from: { email: 'info@norbwebsite.com', name: 'Black Bird Services' },
        // to: [{ email: 'alexm900902@gmail.com' }],
        to: [{ email: 'tovelrob@proton.me' }],
        subject: `New Quote Request from ${firstName} ${lastName}`,
        html,
        category: 'Quote Request',
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Mailtrap error:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Send error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
