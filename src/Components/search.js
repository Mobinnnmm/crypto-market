// Components/Search.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Search = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.get('/api/crypto');
      const cryptos = response.data.data;

      const crypto = cryptos.find((c) => c.name.toLowerCase() === query.toLowerCase());

      if (crypto) {
        router.push(`/crypto/${crypto.id}`);
      } else {
        setError('Cryptocurrency not found');
      }
    } catch (err) {
      console.error('Error searching for cryptocurrency:', err);
      setError('An error occurred while searching for the cryptocurrency');
    }
  };



  return (
    <div>
      <form className='search-container' onSubmit={handleSearch}>
        <input
          type="text"
          name='search'
          className='search-input'
          placeholder="Search for a cryptocurrency"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='search-btn' type="submit">
        <FontAwesomeIcon icon={faSearch} />
        </button>
        
      </form>
      {error && <p>{error}</p>}
      </div>

  );
};

export default Search;