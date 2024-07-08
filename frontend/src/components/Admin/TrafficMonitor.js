import React, { useEffect, useState } from 'react';
import { getTrafficData, updateTrafficData } from '../../Services/trafficService';

const TrafficMonitor = () => {
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrafficData();
        setTrafficData(data);
      } catch (error) {
        console.error('Error fetching traffic data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (newData) => {
    try {
      const updatedData = await updateTrafficData(newData);
      setTrafficData(updatedData);
    } catch (error) {
      console.error('Error updating traffic data:', error);
    }
  };

  return (
    <div>
      <h1>Traffic Monitor</h1>
      {/* Render traffic data and provide UI for updating traffic data */}
      <ul>
        {trafficData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => handleUpdate({/* your new data here */})}>
        Update Traffic Data
      </button>
    </div>
  );
};

export default TrafficMonitor;


