import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useAuth } from '../../useAuth'; // Ensure the correct import path
import { addFavorite, removeFavorite, getFavorites } from '../api/favourite';
import Button from 'react-bootstrap/Button';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchCrypto = async () => {
        try {
          const response = await axios.get(`/api/crypto/${id}`);
          console.log(response.data.data);
          setCrypto(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching crypto:', error);
          setError('Error fetching cryptocurrency data');
          setLoading(false);
        }
      };

      fetchCrypto();
    }
  }, [id]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const userFavorites = await getFavorites(user.uid);
          setFavorites(userFavorites);
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      }
    };

    fetchFavorites();
  }, [user]);

  const handleAddFavorite = async (cryptoId, cryptoName) => {
    if (user) {
      try {
        await addFavorite(user.uid, cryptoId, cryptoName);
        setFavorites(prevFavorites => [...prevFavorites, { id: cryptoId, name: cryptoName }]);
        window.alert(`Added ${cryptoName} to Favorites`);
      } catch (error) {
        console.error('Error adding favorite:', error);
        window.alert('Failed to add to Favorites');
      }
    } else {
      window.alert('Please log in to add favorites');
    }
  };

  const handleRemoveFavorite = async (cryptoId) => {
    if (user) {
      try {
        await removeFavorite(user.uid, cryptoId);
        setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== cryptoId));
        window.alert('Removed from Favorites');
      } catch (error) {
        console.error('Error removing favorite:', error);
        window.alert('Failed to remove from Favorites');
      }
    } else {
      window.alert('Please log in to remove favorites');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { urls } = crypto;

  // Example chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Price (USD)',
        data: [crypto.quote.USD.price, crypto.quote.USD.price * 2, crypto.quote.USD.price * 0.2, crypto.quote.USD.price * 3, crypto.quote.USD.price * 1.1, crypto.quote.USD.price],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '30% 70%', gap: '20px' }}>
      <div>
        <h1>{crypto.name} Details</h1>
        <img src={crypto.logo} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
        <p>Symbol: {crypto.symbol}</p>
        <p>Price: ${crypto.quote.USD.price.toFixed(2)}</p>
        <p>24h Volume: ${crypto.quote.USD.volume_24h.toFixed(2)}</p>
        <p>24h Change: {crypto.quote.USD.percent_change_24h.toFixed(2)}%</p>
        <p>Market Cap: ${crypto.quote.USD.market_cap.toFixed(2)}</p>
        <p>Max Supply: {crypto.max_supply !== undefined ? crypto.max_supply : 'N/A'}</p>
        <p>Circulating Supply: {crypto.circulating_supply !== undefined ? crypto.circulating_supply : 'N/A'}</p>
        {user && (favorites.some(favorite => favorite.id === crypto.id) ? (
          <Button variant="danger"   onClick={() => handleRemoveFavorite(crypto.id)}>Remove from Favorites</Button>
        ) : (
          <Button  variant="success" onClick={() => handleAddFavorite(crypto.id, crypto.name)}>Add to Favorites</Button>
        ))}
      </div>
      <div>
        <Line data={chartData} />
      </div>
      <h2>Links</h2>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Website</th>
            <th>Twitter</th>
            <th>Reddit</th>
            <th>Explorer</th>
            <th>Source Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href={urls.website} target="_blank">
                <img src={'https://cdn.brandfetch.io/bitcoin.org/w/400/h/400'} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
              </a>
            </td>
            <td>
              <a href={urls.twitter} target="_blank">
                <img src={'https://cdn.brandfetch.io/x.com/w/400/h/400'} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
              </a>
            </td>
            <td>
              <a href={urls.reddit} target="_blank">
                <img src={'https://cdn.brandfetch.io/reddit.com/w/400/h/400'} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
              </a>
            </td>
            <td>
              <a href={urls.explorer} target="_blank">
                <img src={'https://cdn.brandfetch.io/trustwallet.com/w/400/h/400'} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
              </a>
            </td>
            <td>
              <a href={urls.source_code} target="_blank">
                <img src={'https://cdn.brandfetch.io/github.com/w/820/h/803/theme/light/symbol'} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoDetail;
