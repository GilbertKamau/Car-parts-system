import React, { useState } from 'react';
import productService from '../../Services/productService';

const ItemSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    productService.searchItems(searchQuery).then((results) => {
      setSearchResults(results);
    }).catch((error) => {
      console.error('Search error:', error);
    });
  };

  return (
    <div>
      <h2>Search Items</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="searchQuery"
          placeholder="Search by name, description, or price"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((item) => (
          <li key={item._id}>
            {item.name} - {item.price} USD - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemSearch;
