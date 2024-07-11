// pages/api/get-ip.js
export default async function handler(req, res) {
    const ipAddress = req.headers['x-forwarded-for'] || 'Unknown';
    res.status(200).json({ ipAddress });
}
