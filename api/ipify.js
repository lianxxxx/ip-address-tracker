export default async function handler(req, res) {
  const { ip } = req.query;
  const IPIFY_KEY = process.env.VITE_IPIFY_KEY;

  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_KEY}&ipAddress=${ip || ''}`
    );
    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch IP data' });
  }
}