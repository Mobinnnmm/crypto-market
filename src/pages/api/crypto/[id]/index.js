// pages/api/crypto/[id].js
import axios from 'axios';
const COINMARKETCAP_INFO_URL = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/info';
const COINMARKETCAP_QUOTES_URL = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest';
const API_KEY = process.env.NEXT_PUBLIC_CRYPTO_KEY;

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const infoResponse = await axios.get(COINMARKETCAP_INFO_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
      params: {
        id,
      },
    });

    const quotesResponse = await axios.get(COINMARKETCAP_QUOTES_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
      params: {
        id,
        convert: 'USD',
      },
    });

    const combinedData = {
      ...infoResponse.data.data[id],
      quote: quotesResponse.data.data[id].quote,
    };

    res.status(200).json({ data: combinedData });
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    res.status(500).json({ error: 'Error fetching the api' });
  }
}
