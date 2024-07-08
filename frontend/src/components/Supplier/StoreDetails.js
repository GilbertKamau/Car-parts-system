import React, { useState, useEffect } from 'react';
import storeService from '../../Services/storeService';

const StoreDetails = () => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    storeService.getStoreDetails().then((data) => setStore(data));
  }, []);

  return (
    <div>
      <h2>Store Details</h2>
      {store ? (
        <div>
          <p>Name: {store.name}</p>
          <p>Address: {store.address}</p>
          <p>Description: {store.description}</p>
          <p>Owner: {store.owner}</p>
        </div>
      ) : (
        <p>Loading store details...</p>
      )}
    </div>
  );
};

export default StoreDetails;
