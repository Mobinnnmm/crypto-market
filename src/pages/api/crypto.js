// pages/api/crypto.js
import axios from 'axios';

const COINMARKETCAP_LISTINGS_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const COINMARKETCAP_INFO_URL = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/info';
const API_KEY = process.env.NEXT_PUBLIC_CRYPTO_KEY;

export default async function handler(req, res) {
  try {
    // Fetch the latest cryptocurrency listings
    const listingsResponse = await axios.get(COINMARKETCAP_LISTINGS_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
      params: {
        start: '1',
        limit: '100',
        convert: 'USD',
      },
    });

    const ids = listingsResponse.data.data.map((crypto) => crypto.id).join(',');

    // Fetch metadata endpoint including logos
    const infoResponse = await axios.get(COINMARKETCAP_INFO_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
      params: {
        id: ids,
      },
    });

    // Combine listings and metadata
    const combinedData = listingsResponse.data.data.map((crypto) => ({
      ...crypto,
      logo: infoResponse.data.data[crypto.id].logo,
    }));

    res.status(200).json({ data: combinedData });
  } catch (error) {
    console.error('Error ', error);
    res.status(500).json({ error: 'Error fetching the api' });
  }
}
