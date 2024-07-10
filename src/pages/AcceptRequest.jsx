import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getDonorDetailsApi,
  getRequestDetails,
  updateRequestDetails,
} from "../services/allApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AcceptRequest() {
  const [fulfilled, setFulfilled] = useState(false);
  const [requestID, setRequestID] = useState(0);
  const [donorID, setDonorID] = useState(0);

  const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const location = useLocation();

  const handleAccept = async (id, acceptStatus, did) => {
    const result = await getRequestDetails(id);
    if (result.data.currentUnit == result.data.unit) {
      setFulfilled(true);
    } else if (acceptStatus == true) {
      const donorDetails = await getDonorDetailsApi(did);
      const donationStatus = result.data.donorList.find(
        (item) => item.mobile == donorDetails.data.phone
      );
      if (donationStatus) {
        toast.info("Interest has been already marked.");
        navigate("/");
      } else {
        const updatedRequest = {
          ...result.data,
          currentUnit: result.data.currentUnit + 1,
          donorList: [
            {
              name: donorDetails.data.username,
              mobile: donorDetails.data.phone,
            },
          ],
        };
        const updateStatus = await updateRequestDetails(id, updatedRequest);
        console.log(updateStatus.data);
        if (updateStatus.status >= 200 && updateStatus.status < 300) {
          toast.success("Interest marked successfully!");
          navigate("/");
        }
      }
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("rid");
    const did = queryParams.get("did");
    handleAccept(id, false, "");
    setRequestID(id);
    setDonorID(did);
  }, []);

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 mt-5 mt-md-0">
        <img
          src="./thumbnail.jpg"
          alt="donation-image"
          className={isMobile ? "w-100" : "w-50"}
        />

        {fulfilled ? (
          <Row className="ms-0 me-0 w-100 d-flex justify-content-center align-items-center mt-5">
            <Col md={5} sm={12}>
              <p
                className="text-center fw-bold "
                style={{ color: "#BABABA", fontFamily: "Roboto" }}
              >
                The blood donation request you are trying to accept has already
                been fulfilled. Thank you for your willingness to help. Your
                readiness to act in times of need is greatly appreciated.
              </p>
            </Col>
          </Row>
        ) : (
          <>
            <h1
              className="fw-bold mt-3 text-center"
              style={{ color: "#BABABA", fontFamily: "Roboto" }}
            >
              Thank You for Saving Lives!
            </h1>
            <p
              className="text-center"
              style={{ color: "#BABABA", fontFamily: "Roboto" }}
            >
              Your generous donation is a beacon of hope for those in need.
              Together, we make a difference.
            </p>
            <Button
              variant="danger"
              style={{ backgroundColor: "#DF1626" }}
              className="fw-bold"
              onClick={() => handleAccept(requestID, true, donorID)}
            >
              Accept Request
            </Button>{" "}
          </>
        )}
      </div>
    </>
  );
}

export default AcceptRequest;
