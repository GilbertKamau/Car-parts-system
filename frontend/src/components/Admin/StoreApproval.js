import React, { useEffect, useState } from 'react';
import storeService from '../../Services/storeService';

const StoreApproval = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    storeService.getStores().then((data) => setStores(data));
  }, []);

  const handleApprove = (storeId) => {
    storeService.approveStore(storeId).then(() => {
      setStores(stores.map(store => store._id === storeId ? { ...store, approved: true } : store));
    });
  };

  return (
    <div>
      <h2>Store Approval</h2>
      <ul>
        {stores.map((store) => (
          <li key={store._id}>
            {store.name} - {store.approved ? 'Approved' : 'Pending'}
            {!store.approved && <button onClick={() => handleApprove(store._id)}>Approve</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreApproval;
