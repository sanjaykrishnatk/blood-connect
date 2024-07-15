import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getRequestByPhoneApi } from "../services/allApi";

function Reportbloodrequest({ phoneNo }) {
  const [requestReport, setRequestReport] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getReport = async (phone) => {
    const result = await getRequestByPhoneApi(phone);
    if (result.status >= 200 && result.status < 300) {
      setRequestReport(result.data);
    }
  };

  console.log(requestReport);

  useEffect(() => {
    getReport(phoneNo);
  }, []);

  return (
    <>
      <div
        className="row ms-0 me-0"
        style={{ marginTop: "2rem", textAlign: "center" }}
      >
        <div className="col-md-12" style={{ margin: "0 auto" }}>
          <div
            className="table-responsive previous-reqyuests-table"
            style={{
              maxWidth: "100%",
              overflowX: "auto",
              marginTop: "1rem",
            }}
          >
            <table
              className="table shadow-sm ps-3 pe-3"
              style={{
                width: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <thead className="table-warning">
                <tr>
                  <th>#</th>
                  <th style={{ minWidth: "50px" }}>Patient's Name</th>
                  <th style={{ minWidth: "50px" }}>Blood Group</th>
                  <th style={{ minWidth: "50px" }}>Units Required</th>
                  <th style={{ minWidth: "50px" }}>Age</th>
                  <th style={{ minWidth: "50px" }}>Gender</th>
                  <th style={{ minWidth: "50px" }}>State</th>
                  <th style={{ minWidth: "50px" }}>District</th>
                  <th style={{ minWidth: "50px" }}>Phone Number</th>
                  <th style={{ minWidth: "50px" }}>Required Date</th>
                  <th style={{ minWidth: "50px" }}>View Donors</th>
                </tr>
              </thead>
              <tbody>
                {requestReport.map((request, index) => (
                  <tr key={request.id}>
                    <td>{index + 1}</td>
                    <td>{request.userName}</td>
                    <td>{request.bloodGroup}</td>
                    <td>{request.unit}</td>
                    <td>{request.age}</td>
                    <td>{request.gender}</td>
                    <td>{request.state}</td>
                    <td>{request.district}</td>
                    <td>{request.phone}</td>
                    <td>{request.startDate}</td>
                    {request.donorList.length > 0 ? (
                      <td>
                        <button
                          className="btn btn-success me-2"
                          onClick={handleShow}
                        >
                          Show Donor
                        </button>
                        <Modal
                          show={show}
                          onHide={handleClose}
                          className="mt-5"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Donors</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {request.donorList.map((donor) => (
                              <>
                                <p>Donor Name: {donor.name}</p>
                                <p>Contact Number: {donor.mobile}</p>
                              </>
                            ))}
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </td>
                    ) : (
                      <td>No Donors</td>
                    )}
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

export default Reportbloodrequest;
