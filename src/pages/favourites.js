import { useEffect, useState } from 'react';
import { useAuth } from '../useAuth';
import { getFavorites } from '../pages/api/favourite';
import axios from 'axios';
import Loading from '../Components/loading'; // Corrected import
import Custom500 from '@/Components/Custom500';

const Favourites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Renamed to avoid conflict
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const userFavorites = await getFavorites(user.uid);
          setFavorites(userFavorites);
        } catch (error) {
          console.error('Error fetching favorites:', error);
          setError('Error fetching favorites');
        }
      }
    };

    fetchFavorites();
  }, [user]);

  useEffect(() => {
    const fetchCryptoDetails = async () => {
      if (favorites.length > 0) {
        try {
          const response = await axios.get('/api/crypto');
          const allCryptos = response.data.data;
          const favoriteCryptos = allCryptos.filter(crypto => 
            favorites.some(fav => fav.id === crypto.id)
          );
          setCryptos(favoriteCryptos);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching crypto details:', error);
          setError(<Custom500/>);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchCryptoDetails();
  }, [favorites]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='crypto-list-page'>
      <h1>Favorite Cryptocurrencies</h1>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>24h Volume</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => (
            <tr key={crypto.id}>
              <td>{index + 1}</td>
              <td><img src={crypto.logo} alt={crypto.name} className="crypto-logo" /></td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>${crypto.quote.USD.price.toFixed(2)}</td>
              <td>${crypto.quote.USD.volume_24h.toFixed(2)}</td>
              <td className={crypto.quote.USD.percent_change_24h >= 0 ? 'positive-change' : 'negative-change'}>
                {crypto.quote.USD.percent_change_24h.toFixed(2)}%
              </td>
              <td>${crypto.quote.USD.market_cap.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Favourites;
