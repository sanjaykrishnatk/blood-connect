import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import { getRequestReportApi } from "../services/allApi";

import { getRequestByIdApi, getRequests } from "../services/allApi";

function MyVerticallyCenteredModal(props) {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Donor Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {props.donorDetails.map((item) => (
          <>
            <p>Donor Name : {item.name}</p>
            <p>
              Contact Number :{item.mobile}
            </p>
          </>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-warning" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function Reportbloodrequest() {

  const [modalShow, setModalShow] = useState(false);

  const [donorDetails, setDonorDetails] = useState([]);

  const [requestReport, setRequestReport] = useState([]);

  const handleSetDonor = (donorList) => {
    setDonorDetails(donorList);
    setModalShow(true);
  }

  const handleModalHide = () => {
    setDonorDetails([]);
    setModalShow(false);
  }

  const getReport = async (username) => {
    const result = await getRequests();
    // let reportTableData = result.data.map((item) => {
    //   return {
    //     userName: item.userName,
    //     bloodGroup: item.bloodGroup,
    //     unit: item.unit,
    //     age: item.age,
    //     gender: item.gender,
    //     state: item.state,
    //     district: item.district,
    //     phone: item.phone,
    //     startDate: item.startDate
    //   };
    // });

    if (result.status >= 200 && result.status < 300) {
      setRequestReport(result.data);
    }
  };

  console.log(requestReport);

  useEffect(() => {
    getReport("Farhana");
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center p-3 mt-5 w-100 mb-5">
        <h4 className="fs-2">Blood Request Report</h4>
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
                  <th style={{ minWidth: '50px' }}>Patient's Name</th>
                  <th style={{ minWidth: '50px' }}>Blood Group</th>
                  <th style={{ minWidth: '50px' }}>Units Required</th>
                  <th style={{ minWidth: '50px' }}>Age</th>
                  <th style={{ minWidth: '50px' }}>Gender</th>
                  <th style={{ minWidth: '50px' }}>State</th>
                  <th style={{ minWidth: '50px' }}>District</th>
                  <th style={{ minWidth: '50px' }}>Phone Number</th>
                  <th style={{ minWidth: '50px' }}>Required Date</th>
                  <th style={{ minWidth: '50px' }}>Actions</th>
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
                    {request.donorList.length > 0 ?
                      <td>
                        <button className="btn btn-success me-2" onClick={() => handleSetDonor(request.donorList)}>Show Donor</button>
                      </td> : <td />
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        donorDetails={donorDetails}
        onHide={() => handleModalHide()}
      />
      {/* <div className="row" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <div className="col-md-12" style={{ margin: '0 auto' }}>
          <div className="table-responsive" style={{ maxWidth: '100%', overflowX: 'auto', marginTop: '1rem' }}>
            {requestReport?.length > 0 ? (
              <table
                className="table shadow-sm"
                style={{
                  width: '100%',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <thead className="table-warning">
                  <tr>
                    <th className="text-center">#</th>
                    <th style={{ minWidth: '50px' }}>Patient Name</th>
                    <th style={{ minWidth: '50px' }}>Blood Group</th>
                    <th style={{ minWidth: '50px' }}>Units Required</th>
                    <th style={{ minWidth: '50px' }}>Age</th>
                    <th style={{ minWidth: '50px' }}>Gender</th>
                    <th style={{ minWidth: '50px' }}>State</th>
                    <th style={{ minWidth: '50px' }}>District</th>
                    <th style={{ minWidth: '50px' }}>Phone Number</th>
                    <th style={{ minWidth: '50px' }}>Required Date</th>
                  </tr>
                </thead>
                <tbody>
                  {requestReport?.map((item, index) => (
                    <tr key={index}>
                      <td> {index + 1} </td>
                      <td> {item?.userName} </td>
                      <td> {item?.bloodGroup} </td>
                      <td> {item?.unit} </td>
                      <td> {item?.age} </td>
                      <td> {item?.gender} </td>
                      <td> {item?.state} </td>
                      <td> {item?.district} </td>
                      <td> {item?.phone} </td>
                      <td> {item?.startDate} </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              // <Table
              //   columns={[
              //     "Patient Name",
              //     "Blood Group",
              //     "Units Required",
              //     "Age",
              //     "Gender",
              //     "State",
              //     "District",
              //     "Phone Number",
              //     "Required Date"
              //   ]}
              //   data={requestReport}
              // />
              // </>
            ) : (
              <p className="text-warning fs-5">Report not available</p>
            )}
          </div>
        </div>
        <div className="col-md-2"></div>
      </div> */}





    </>
  );
}

export default Reportbloodrequest;
