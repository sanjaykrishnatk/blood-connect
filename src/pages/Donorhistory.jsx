import React, { useEffect, useState } from 'react'
import { retrieveHistoryApi } from '../services/allApi';

function Donorhistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await retrieveHistoryApi();
        if (response && Array.isArray(response.data)) {
          setHistory(response.data);
        } else {
          console.error('Expected an array but received:', response);
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
        <div className="table-responsive " style={{ maxWidth: '100%', overflowX: 'auto', marginTop: '1rem' }}>
          <table className="table shadow-sm ms-5 mx-3"
              style={{
                width: '80%',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}>
            <thead className='table-warning'>
              <tr>
                <th>#</th>
                <th style={{ minWidth: '20px' }}>Receiver Name</th>
                <th style={{ minWidth: '20px' }}>Hospital</th>
                <th style={{ minWidth: '20px' }}>Place</th>
                <th style={{ minWidth: '20px' }}>Phone</th>
                <th style={{ minWidth: '20px' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.receiver}</td>
                  <td>{item.hospital}</td>
                  <td>{item.place}</td>
                  <td>{item.phone}</td>
                  <td>{item.donationDate}</td>
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
