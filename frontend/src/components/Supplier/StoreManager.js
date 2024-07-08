import React, { useState, useEffect } from 'react';
import storeService from '../../Services/storeService';

const StoreManager = () => {
  const [storeDetails, setStoreDetails] = useState(null);

  useEffect(() => {
    storeService.getStoreDetails().then((data) => setStoreDetails(data));
  }, []);

  return (
    <div>
      <h2>Store Manager</h2>
      {storeDetails ? (
        <div>
          <p>Name: {storeDetails.name}</p>
          <p>Address: {storeDetails.address}</p>
          <p>Description: {storeDetails.description}</p>
        </div>
      ) : (
        <p>Loading store details...</p>
      )}
    </div>
  );
};

export default StoreManager;
