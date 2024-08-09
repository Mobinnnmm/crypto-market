import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Loading from './loading'; // Ensure this is correctly defined and exported
import { useAuth } from '../useAuth';
import { addFavorite, removeFavorite, getFavorites } from '../pages/api/favourite';
import Custom500 from "./Custom500";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const CryptoList = () => {
  const { user } = useAuth();
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    if (user) {
      try {
        const userFavorites = await getFavorites(user.uid);
        console.log('Fetched favorites:', userFavorites);
        setFavorites(userFavorites);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    }
  };

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('/api/crypto');
        setCryptos(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cryptos:', error);
        setError(<Custom500 />);
        setIsLoading(false);
      }
    };

    fetchCryptos();
    if (user) {
      fetchFavorites();
    }
  }, [user]);

  const handleAddFavorite = async (cryptoId, cryptoName) => {
    if (user) {
      try {
        console.log(`Adding ${cryptoName} (ID: ${cryptoId}) to favorites`);
        await addFavorite(user.uid, cryptoId, cryptoName);
        await fetchFavorites();
        window.alert(`Added ${cryptoName} to Favorites`);
      } catch (error) {
        console.error('Error adding favorite:', error);
        window.alert('Failed to add to Favorites');
      }
    } else {
      console.log('User not logged in');
      window.alert('Please log in to add favorites');
    }
  };

  const handleRemoveFavorite = async (cryptoId) => {
    if (user) {
      try {
        console.log(`Removing crypto ID ${cryptoId} from favorites`);
        await removeFavorite(user.uid, cryptoId);
        await fetchFavorites();
        window.alert('Removed from Favorites');
      } catch (error) {
        console.error('Error removing favorite:', error);
        window.alert('Failed to remove from Favorites');
      }
    } else {
      console.log('User not logged in');
      window.alert('Please log in to remove favorites');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='crypto-list-page'>
      <h1>Cryptocurrency Listings</h1>
      <table className="crypto-table">
        <thead>
          <tr>
            {user ? <th>Favourite</th> : <th></th>}
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>24h Volume</th>
            <th>24h Change</th>
            <th>Market Cap</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {cryptos.map((crypto, index) => (
            <tr key={crypto.id}>
              <td>
              {user && (
        favorites.some(favorite => favorite.id === crypto.id) ? (
          <FontAwesomeIcon
            icon={solidStar}
            color="gold"
            onClick={() => handleRemoveFavorite(crypto.id)}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <FontAwesomeIcon
            icon={solidStar}
            color="gray"
            onClick={() => handleAddFavorite(crypto.id, crypto.name)}
            style={{ cursor: 'pointer' }}
          />
        )
      )}
              </td>
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
              <td>
                <Link href={`/crypto/${crypto.id}`} legacyBehavior>
                  <a className="details-button">View</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
