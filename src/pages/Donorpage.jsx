import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { retrieveLastDonation, updateLastDonationApi } from '../services/allApi';


function Donorpage() {
  const [formData, setFormData] = useState({
    date: '',
    
  });
  const [donorId, setDonorId] = useState(1); 
  
  useEffect(() => {
    
    fetchLastDonation();
  },[]);
    
  

  const [updatedData, setUpdatedData] = useState(null);
  
  

  const fetchLastDonation = async () => {
    try {
      // Make API call to retrieve last donation date
      const response = await retrieveLastDonation(donorId);
      if (response) {
        // Update formData with retrieved last donation date
        setFormData({
          date: response.lastDonation,
        });
      } else {
        toast.error('Failed to fetch last donation date.');
      }
    } catch (error) {
      console.error('Error fetching last donation date:', error);
      toast.error('Failed to fetch last donation date. Please try again.');
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Make API call to update the last donation date
      const response = await updateLastDonationApi(donorId, { lastDonation: formData.date });
      // Handle success response
      toast.success('Updated successfully!');
      // Optionally update state or perform any other action upon successful update
    } catch (error) {
      // Handle error
      console.error('Error updating donation date:', error);
      toast.error('Failed to update. Please try again.');
    }
   

  
   };

  
  return (
    <>
      <div style={{ marginTop: '2rem', textAlign: 'center', overflowX: 'hidden' }}>
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginTop: '2rem', width: '90%', maxWidth: '500px', padding: '1rem' }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <h1 className="fs-5" style={{ textAlign: 'center', padding: '1rem 0' }}>Have you donated blood recently?</h1>
              <form onSubmit={handleUpdate} style={{ width: '100%', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                
                  <input
                    type="date"
                    id="date"
                    name="date"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '3px',
                    border: 'none',
                    background: '#007bff',
                    color: '#fff',
                    marginTop: '1rem',
                    width: '100%',
                    maxWidth: '100px', // Added max width for responsiveness
                    margin: '0 auto', // Center align button
                    display: 'block', // Ensure button is block level
                  }}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <div className="col-md-12" style={{ margin: '0 auto' }}>
          <div className="table-responsive" style={{ maxWidth: '100%', overflowX: 'auto', marginTop: '1rem' }}>
            <table
              className="table shadow-sm"
              style={{
                width: '100%',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <thead className="table-warning">
                <tr>
                  <th>#</th>
                  <th style={{ minWidth: '50px' }}>User Name</th>
                  <th style={{ minWidth: '50px' }}>Hospital</th>
                  <th style={{ minWidth: '50px' }}>Place</th>
                  <th style={{ minWidth: '50px' }}>Blood Group</th>
                  <th style={{ minWidth: '50px' }}>Date Needed</th>
                  <th style={{ minWidth: '50px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>David Abhraham</td>
                  <td>Merry Matha Hospital</td>
                  <td>London</td>
                  <td>A+</td>
                  <td>20/07/2024</td>
                  <td style={{ display: 'flex' }}>
                    <button className="btn btn-success me-2">Accept</button>
                    <button className="btn btn-danger">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Donorpage;
