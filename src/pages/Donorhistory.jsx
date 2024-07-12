import React, { useEffect, useState } from 'react'
import { retrieveHistoryApi } from '../services/allApi';

function Donorhistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await retrieveHistoryApi();
        if (response && Array.isArray(response.data)) {
          const donors = response.data;
          const allHistory = donors.reduce((acc, donor) => {
            if (Array.isArray(donor.history)) {
              return [...acc, ...donor.history];
            }
            return acc;
          }, []);
          setHistory(allHistory);
        } else {
          console.error('Expected an array but received:', response.data);
          setHistory([]);
        }
      } catch (error) {
        console.error('Error fetching history data:', error);
        
      }
    }

    fetchHistory();
  }, []);

  return (
    <div className="row justify-content-center" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <div className="col-md-12 p-5" style={{ margin: '0 auto' }}>
        <div className="table-responsive " style={{ maxWidth: '100%', overflowX: 'none', marginTop: '1rem' }}>
          <table className="table shadow-sm ms-5 mx-3"
              style={{
                width: '80%',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}>
            <thead className='table-warning'>
              <tr>
                <th>#</th>
                <th style={{ minWidth: '10px' }}>Receiver Name</th>
                <th style={{ minWidth: '10px' }}>Phone</th>
                <th style={{ minWidth: '10px' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.recieverName}</td>
                  <td>{item.phone}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Donorhistory;
