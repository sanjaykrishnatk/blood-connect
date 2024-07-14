import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { retrieveLastDonation, updateLastDonationApi, updateRequestDetails, getDonorDetailsApi, updateDonorDetails, getRequestDetails } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';

function Donorpage({ requestId }) {
  const [formData, setFormData] = useState({
    date: '',
  });
  const [donorId, setDonorId] = useState(1); // Assuming donorId is known and set
  const [requests, setRequests] = useState([]);
  const [donorDetails, setDonorDetails] = useState(null);
  const [requestDetails, setRequestDetails] = useState(null);

  useEffect(() => {
    fetchLastDonation();
    fetchRequests();
    if (requestId) {
      fetchRequestDetails();
    }
    fetchDonorDetails();
  }, [requestId]); // Include requestId in dependency array to trigger effect on change

  const fetchLastDonation = async () => {
    try {
      const response = await retrieveLastDonation(donorId);
      if (response) {
        setFormData({ date: response.data.lastDonation });
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
      if (!response.ok) {
        throw new Error(`Failed to fetch requests. Status: ${response.status}`);
      }
      const data = await response.json();

      // Retrieve accepted request IDs from local storage
      const acceptedRequestIds = JSON.parse(localStorage.getItem('acceptedRequestIds')) || [];

      // Filter out accepted requests and requests already accepted
      const filteredRequests = data.filter(request => (
        request.status !== 'Accepted' && !acceptedRequestIds.includes(request.id)
      ));

      setRequests(filteredRequests);
    } catch (error) {
      console.error('Error fetching requests:', error);
      toast.error('Failed to fetch requests. Please try again.');
    }
  };

  const fetchRequestDetails = async () => {
    try {
      const details = await getRequestDetails(requestId);
      setRequestDetails(details);
    } catch (error) {
      console.error('Error fetching request details:', error);
      toast.error('Failed to fetch request details. Please try again.');
    }
  };

  const fetchDonorDetails = async () => {
    try {
      const response = await getDonorDetailsApi(donorId);
      if (response) {
        setDonorDetails(response.data);
      } else {
        toast.error('Failed to fetch donor details.');
      }
    } catch (error) {
      console.error('Error fetching donor details:', error);
      toast.error('Failed to fetch donor details. Please try again.');
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

      // Check if it has been at least 90 days since the last donation
      if (diffDays < 90) {
        toast.error('Cannot accept request. It has not been 3 months since the last donation.');
        return;
      }

      // Check if the currentUnit is less than the required unit
      if (request.currentUnit < request.unit) {
        const updatedRequest = {
          ...request,
          currentUnit: request.currentUnit + 1,
          donorList: [...request.donorList, { name: donorDetails.name, mobile: donorDetails.phone }],
        };

        // If the currentUnit meets the required unit, update status to 'Accepted'
        if (updatedRequest.currentUnit === request.unit) {
          updatedRequest.status = 'Accepted';
        }

        await updateRequestDetails(request.id, updatedRequest);

        // Update donor details with request history
        const donor = await getDonorDetailsApi(donorId);
        if (donor) {
          donor.history = donor.history || [];
          donor.history.push({
            requestId: request.id,
            userName: request.userName,
            phone: request.phone,
            gender: request.gender,
            age: request.age,
            district: request.district,
            startDate: request.startDate,
          });

          await updateDonorDetails(donorId, donor);

          // Show success message and update local state (remove accepted request from list)
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
