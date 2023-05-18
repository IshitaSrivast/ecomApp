import React, { useState, useEffect } from 'react';
import SearchResultItem from './SearchResultItem';
import LoadingSpinner from './Loading';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const filteredResults = data.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(filteredResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }

      setIsLoading(false);
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  

  return (
    <div>
    <div className='input-group' >
    <div className='form-outline' style={{ width: '90%', margin: '0 auto', justifyContent: 'center' }}>
      <input
        placeholder="Search by Title..." 
        type="search"
        id="form1" 
        className="form-control"
        value={searchQuery}
        
        onChange={handleInputChange}
      />
      </div>
      </div>
      {isLoading ? (
        <LoadingSpinner/>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {searchResults.map((product) => (
            <SearchResultItem
              key={product.id}
              product={product}
              
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
