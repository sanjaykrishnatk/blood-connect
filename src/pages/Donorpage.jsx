import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  retrieveLastDonation,
  updateLastDonationApi,
  updateRequestDetails,
  getDonorDetailsApi,
  updateDonorDetails,
  getRequestDetails,
  getRequestsByBloodGroupApi,
} from "../services/allApi";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../services/serverUrl";
function Donorpage({ userID, page }) {
  const [formData, setFormData] = useState({ date: "" });
  const [donorId, setDonorId] = useState(1);
  const [requests, setRequests] = useState([]);
  const [eligible, setEligible] = useState(false);
  const [history, setHistory] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setDonorId(userID);
    donationCheck(donorId);
  }, []);

  const handleDonation = (rid) => {
    navigate(`/accept?rid=${rid}&did=${userID}`);
  };
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const atleastThreeMonths = (lastDonation, todayDate) => {
    const lastDonationDate = parseDate(lastDonation);
    const today = parseDate(todayDate);
    const threeMonthsAgo = new Date(today.setMonth(today.getMonth() - 3));
    return lastDonationDate < threeMonthsAgo;
  };
  const donationCheck = async (id) => {
    const donorDetails = await getDonorDetailsApi(id);
    setHistory(donorDetails.data.history);
    const lastDonationDate = donorDetails.data.lastDonation;
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB");
    const eligible = atleastThreeMonths(lastDonationDate, formattedDate);
    console.log(eligible);
    if (eligible) {
      setEligible(true);
      const requestData = await getRequestsByBloodGroupApi(
        donorDetails.data.bloodGroup
      );
      const eligibleRequests = requestData.data.filter((request) => {
        const requestDate = parseDate(request.startDate);
        const todayDate = parseDate(formattedDate);
        return requestDate >= todayDate;
      });
      setRequests(eligibleRequests);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateLastDonationApi(donorId, {
        lastDonation: new Date(formData.date).toLocaleDateString("en-GB"),
      });
      toast.success("Updated successfully!");
    } catch (error) {
      console.error("Error updating donation date:", error);
      toast.error("Failed to update. Please try again.");
    }
  };

  return (
    <>
      <div
        style={{ marginTop: "2rem", textAlign: "center", overflowX: "hidden" }}
      >
        {page == "home" && (
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginTop: "2rem",
                width: "90%",
                maxWidth: "500px",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h1
                  className="fs-5"
                  style={{ textAlign: "center", padding: "1rem 0" }}
                >
                  Have you donated blood recently?
                </h1>
                <form
                  onSubmit={handleUpdate}
                  style={{ width: "100%", margin: "0 auto", padding: "0 1rem" }}
                >
                  <div style={{ marginBottom: "1rem" }}>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "0.5rem",
                        fontSize: "1rem",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                      }}
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex w-100 justify-content-center align-items-center ">
                    <button
                      className="w-50 mb-4"
                      type="submit"
                      style={{
                        display: "block",
                        fontSize: "1rem",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        borderRadius: "4px",
                        border: "none",
                      }}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {page == "requests" && (
          <div>
            {eligible ? (
              <div style={{ marginTop: "2rem" }}>
                <h2 className="fs-5">Available Requests</h2>

                <div
                  className="row d-flex justify-content-center align-items-center w-100"
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="col-md-12 p-3 d-flex justify-content-center align-items-center"
                    style={{ margin: "0 auto" }}
                  >
                    <div
                      className="table-responsive ps-5 pe-5 "
                      style={{
                        width: "100%",
                        overflowX: "hidden",
                        marginTop: "1rem",
                      }}
                    >
                      <table
                        className="table shadow-sm  mx-3"
                        style={{
                          width: "100%",
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <thead className="table-warning">
                          <tr>
                            <th>#</th>
                            <th style={{ minWidth: "10px" }}>Name</th>
                            <th style={{ minWidth: "10px" }}>Blood Group</th>
                            <th style={{ minWidth: "10px" }}>Age</th>
                            <th style={{ minWidth: "10px" }}>Phone</th>
                            <th style={{ minWidth: "10px" }}>Date</th>
                            <th style={{ minWidth: "10px" }}>District</th>
                            <th style={{ minWidth: "10px" }}>State</th>
                            <th style={{ minWidth: "10px" }}></th>
                          </tr>
                        </thead>
                        <tbody>
                          {requests.map((request, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{request.userName}</td>
                              <td>{request.bloodGroup}</td>
                              <td>{request.age}</td>
                              <td>{request.phone}</td>
                              <td>{request.startDate}</td>
                              <td>{request.district}</td>
                              <td>{request.state}</td>
                              <td>
                                <button
                                  className="btn btn-success"
                                  onClick={() => handleDonation(request.id)}
                                >
                                  Accept
                                </button>{" "}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h3 className="text-center text-warning">
                No requests available
              </h3>
            )}
          </div>
        )}
        {page == "history" && (
          <div>
            {history.length > 0 ? (
              <div style={{ marginTop: "2rem" }}>
                <h2 className="fs-5">Donation History</h2>

                <div
                  className="row d-flex justify-content-center align-items-center w-100"
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="col-md-12 p-3 d-flex justify-content-center align-items-center"
                    style={{ margin: "0 auto" }}
                  >
                    <div
                      className="table-responsive ps-5 pe-5 "
                      style={{
                        width: "100%",
                        overflowX: "hidden",
                        marginTop: "1rem",
                      }}
                    >
                      <table
                        className="table shadow-sm  mx-3"
                        style={{
                          width: "100%",
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <thead className="table-warning">
                          <tr>
                            <th>#</th>
                            <th style={{ minWidth: "10px" }}>Name</th>
                            <th style={{ minWidth: "10px" }}>Phone</th>
                            <th style={{ minWidth: "10px" }}>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {history.map((request, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{request.recieverName}</td>
                              <td>{request.phone}</td>
                              <td>{request.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h3 className="text-center text-warning">No donation History</h3>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Donorpage;
