import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  retrieveLastDonation,
  updateLastDonationApi,
  updateRequestDetails,
  getDonorDetailsApi,
  updateDonorDetails,
  getRequestDetails
} from '../services/allApi';

function Donorpage() {
  const [formData, setFormData] = useState({ date: '' });
  const [donorId, setDonorId] = useState(1); // Assuming donorId is known and set
  const [requests, setRequests] = useState([]);
  const [donorDetails, setDonorDetails] = useState(null);
  const [requestDetails, setRequestDetails] = useState([]);

  useEffect(() => {
    fetchLastDonation();
    fetchDonorDetails();
  }, []);

  useEffect(() => {
    if (donorDetails) {
      fetchRequestDetails();
    }
  }, [donorDetails]);

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

  const fetchDonorDetails = async () => {
    try {
      const response = await getDonorDetailsApi(donorId);
      if (response) {
        setDonorDetails(response);
      } else {
        toast.error('Failed to fetch donor details.');
      }
    } catch (error) {
      console.error('Error fetching donor details:', error);
      toast.error('Failed to fetch donor details. Please try again.');
    }
  };

  const fetchRequestDetails = async () => {
    try {
      const response = await getRequestDetails(donorId); // Assuming donorId is the correct ID to fetch request details
      if (Array.isArray(response)) {
        setRequestDetails(response);

        const acceptedRequestIds = JSON.parse(localStorage.getItem('acceptedRequestIds')) || [];
        const filteredRequests = response.filter(
          (request) =>
            request.bloodGroup === donorDetails.bloodGroup &&
            request.status !== 'Accepted' &&
            !acceptedRequestIds.includes(request.id)
        );
        setRequests(filteredRequests);
      } else {
        toast.error('Request details not in expected format.');
      }
    } catch (error) {
      console.error('Error fetching request details:', error);
      toast.error('Failed to fetch request details. Please try again.');
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
      const lastDonationDate = new Date(formData.date);
      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - lastDonationDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 90) {
        toast.error('Cannot accept request. It has not been 3 months since the last donation.');
        return;
      }

      if (request.currentUnit < request.unit) {
        const updatedRequest = {
          ...request,
          currentUnit: request.currentUnit + 1,
          donorList: [...request.donorList, { name: donorDetails.name, mobile: donorDetails.phone }],
        };

        if (updatedRequest.currentUnit === request.unit) {
          updatedRequest.status = 'Accepted';
        }

        await updateRequestDetails(request.id, updatedRequest);

        const updatedDonor = await getDonorDetailsApi(donorId);
        if (updatedDonor) {
          const updatedHistory = updatedDonor.history || [];
          updatedHistory.push({
            requestId: request.id,
            userName: request.userName,
            phone: request.phone,
            gender: request.gender,
            age: request.age,
            district: request.district,
            startDate: request.startDate,
          });

          await updateDonorDetails(donorId, { ...updatedDonor, history: updatedHistory });

          toast.success('Request accepted successfully!');
          const acceptedRequestIds = JSON.parse(localStorage.getItem('acceptedRequestIds')) || [];
          acceptedRequestIds.push(request.id);
          localStorage.setItem('acceptedRequestIds', JSON.stringify(acceptedRequestIds));
          setRequests((prevRequests) => prevRequests.filter((req) => req.id !== request.id));
        } else {
          toast.error('Failed to update donor details.');
        }
      } else {
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
                      fontSize: '1rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '4px',
                    border: 'none',
                  }}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h2 className="fs-5">Available Requests</h2>
          <ul>
            {requests.map((request) => (
              <li key={request.id}>
                <p>User Name: {request.userName}</p>
                <p>Blood Group: {request.bloodGroup}</p>
                <p>Unit: {request.unit}</p>
                <p>Age: {request.age}</p>
                <p>Gender: {request.gender}</p>
                <p>State: {request.state}</p>
                <p>District: {request.district}</p>
                <p>Phone: {request.phone}</p>
                <p>Start Date: {request.startDate}</p>
                <p>Current Unit: {request.currentUnit}</p>
                <button onClick={() => handleAccept(request)}>Accept Request</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Donorpage;
