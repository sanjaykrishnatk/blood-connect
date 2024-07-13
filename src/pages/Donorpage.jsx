import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { retrieveLastDonation, updateLastDonationApi, updateRequestDetails, retrieveDonorDetails, updateDonorDetails } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';

function Donorpage() {
  const [formData, setFormData] = useState({
    date: '',
  });
  const [donorId, setDonorId] = useState(1);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchLastDonation();
    fetchRequests();
  }, []);

  const fetchLastDonation = async () => {
    try {
      const response = await retrieveLastDonation(donorId);
      if (response) {
        setFormData({ date: response.lastDonation });
      } else {
        toast.error('Failed to fetch last donation date.');
      }
    } catch (error) {
      console.error('Error fetching last donation date:', error);
      toast.error('Failed to fetch last donation date. Please try again.');
    }
  };

  const fetchRequests = async () => {
    try {
      const response = await fetch(`${serverUrl}/requests`);
      const data = await response.json();

      // Retrieve accepted request IDs from local storage
      const acceptedRequestIds = JSON.parse(localStorage.getItem('acceptedRequestIds')) || [];

      // Filter out accepted requests
      const filteredRequests = data.filter(request => request.status !== 'Accepted' && !acceptedRequestIds.includes(request.id));

      setRequests(filteredRequests);
    } catch (error) {
      console.error('Error fetching requests:', error);
      toast.error('Failed to fetch requests. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateLastDonationApi(donorId, { lastDonation: formData.date });
      toast.success('Updated successfully!');
    } catch (error) {
      console.error('Error updating donation date:', error);
      toast.error('Failed to update. Please try again.');
    }
  };

  const handleAccept = async (request) => {
    try {
      console.log('Current request data:', request);

      if (request.currentUnit < request.unit) {
        const updatedRequest = {
          ...request,
          currentUnit: request.currentUnit + 1,
          donorList: [...request.donorList, { name: 'Lekshmi', mobile: '8596526340' }],
        };

        if (updatedRequest.currentUnit === request.unit) {
          updatedRequest.status = 'Accepted';
        }

        await updateRequestDetails(request.id, updatedRequest);

        const donor = await retrieveDonorDetails(donorId);

        if (donor) {
          donor.history = donor.history || [];
          donor.history.push({
            requestId: request.id,
            userName: request.userName,
            gender: request.gender,
            age: request.age,
            district: request.district,
            startDate: request.startDate,
            phone: request.phone,
          });

          await updateDonorDetails(donor.id, donor);

          toast.success('Request accepted successfully!');
        } else {
          toast.error('Failed to update donor details.');
        }

        // Add accepted request ID to local storage
        const acceptedRequestIds = JSON.parse(localStorage.getItem('acceptedRequestIds')) || [];
        acceptedRequestIds.push(request.id);
        localStorage.setItem('acceptedRequestIds', JSON.stringify(acceptedRequestIds));

        // Filter out the accepted request from the requests state
        setRequests((prevRequests) => prevRequests.filter((req) => req.id !== request.id));
      } else {
        console.log('Request has already met the required unit:', request.currentUnit, request.unit);
        toast.info('Request has already met the required unit.');
      }
    } catch (error) {
      console.error('Error accepting request:', error);
      toast.error('Failed to accept request. Please try again.');
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
                    maxWidth: '100px',
                    margin: '0 auto',
                    display: 'block',
                  }}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr />
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
                  <th style={{ minWidth: '50px' }}>Gender</th>
                  <th style={{ minWidth: '50px' }}>Age</th>
                  <th style={{ minWidth: '50px' }}>District</th>
                  <th style={{ minWidth: '50px' }}>Date Needed</th>
                  <th style={{ minWidth: '50px' }}>Phone</th>
                  <th style={{ minWidth: '50px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={request.id}>
                    <td>{index + 1}</td>
                    <td>{request.userName}</td>
                    <td>{request.gender}</td>
                    <td>{request.age}</td>
                    <td>{request.district}</td>
                    <td>{request.startDate}</td>
                    <td>{request.phone}</td>
                    <td>
                      <button className="btn btn-success me-2" onClick={() => handleAccept(request)}>Accept</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donorpage;
