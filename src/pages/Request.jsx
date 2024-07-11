import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { addRequestApi } from "../services/allApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import stateOptions from "../services/states";

function Request() {
  const initialBloodRequest = {
    userName: "",
    bloodGroup: "",
    unit: "",
    age: "",
    gender: "",
    state: "",
    district: "",
    phone: "",
    // startDate: (new Date()).toLocaleDateString()
    startDate: new Date()
  };

  const [bloodRequest, setBloodRequest] = useState({ ...initialBloodRequest });

  const bloodGroupOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleClose = () => {
    setBloodRequest({ ...initialBloodRequest });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { userName, bloodGroup, unit, age, gender, state, district, phone, startDate } = bloodRequest
    const formattedStartDate = startDate.toLocaleDateString('en-GB');

    console.log(bloodRequest);
    if (!userName || !bloodGroup || !unit || !age || !gender || !state || !district || !phone || !startDate) {
      toast.info("Please fill the form completely");
    }
    else {
      // const result = await addRequestApi(bloodRequest)
      // console.log(result);

      const result = await addRequestApi({
        ...bloodRequest,
        startDate: formattedStartDate
      });
      
      if (result.status >= 200 && result.status < 300) {
        handleClose();

        toast.success("Form Submitted Successfully");        
      } else {
        toast.error("Something went wrong");
      }
    }
  }


  return (
    <>
      <div className=" mt-5 d-flex justify-content-center align-items-center">
        <div className="bg-light p-5 rounded">
          <h1 className="text-danger">Blood Request Form</h1>

          <Form>
            <Row className="mb-5">

              <Form.Group as={Col} controlId="username">
                <Form.Label>Pateint's Name : </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Name"
                  value={bloodRequest.userName}
                  onChange={(event) => {
                    const value = event.target.value;
                    console.log(value);
                    setBloodRequest({ ...bloodRequest, userName: value });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="age">
                <Form.Label>Age :</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=" "
                  value={bloodRequest.age}
                  onChange={(event) => {
                    const value = event.target.value;
                    console.log(value);
                    setBloodRequest({ ...bloodRequest, age: value });
                  }}
                />
              </Form.Group>


              <Form.Group as={Col} controlId="gender">
                <Form.Label>Gender : </Form.Label>

                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="male"
                      name="group1"
                      type={type}
                      id={`inline-${type}-male`}
                      value="male"
                      checked={bloodRequest.gender === 'male'}
                      onChange={(event) => {
                        const value = event.target.value;
                        console.log(value);
                        setBloodRequest({ ...bloodRequest, gender: value });
                      }}
                    />
                    <Form.Check
                      inline
                      label="female"
                      name="group1"
                      type={type}
                      id={`inline-${type}-female`}
                      value="female"
                      checked={bloodRequest.gender === 'female'}
                      onChange={(event) => {
                        const value = event.target.value;
                        console.log(value);
                        setBloodRequest({ ...bloodRequest, gender: value });
                      }}
                    />
                    <Form.Check
                      inline
                      label="other"
                      name="group1"
                      type={type}
                      id={`inline-${type}-other`}
                      value="other"
                      checked={bloodRequest.gender === 'other'}
                      onChange={(event) => {
                        const value = event.target.value;
                        console.log(value);
                        setBloodRequest({ ...bloodRequest, gender: value });
                      }}
                    />
                  </div>
                ))}
              </Form.Group>

            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="bloodgrp">
                <Form.Label>Blood Group : </Form.Label>
                <Form.Select aria-label="Blood Group" value={bloodRequest.bloodGroup}
                  onChange={(event) => {
                    const value = event.target.value;
                    console.log(value);
                    setBloodRequest({ ...bloodRequest, bloodGroup: value });
                  }}
                >
                  <option>Select...</option>
                  {bloodGroupOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>


              <Form.Group as={Col} controlId="date">
                <Form.Label>Blood Required Date : </Form.Label>
                <DatePicker
                  selected={bloodRequest.startDate}
                  // onChange={(date) => setBloodRequest({ ...bloodRequest, startDate: date.toLocaleDateString() })}
                  onChange={(date) => setBloodRequest({ ...bloodRequest, startDate: date })}
                  dateFormat="dd/MM/yyyy"
                  />
              </Form.Group>


              <Form.Group as={Col} controlId="unit">
                <Form.Label>Units required :</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Units"
                  value={bloodRequest.unit}
                  onChange={(event) => {
                    const value = event.target.value;
                    console.log(value);
                    setBloodRequest({ ...bloodRequest, unit: value });
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">

              <Form.Group as={Col} controlId="state">
                <Form.Label>State :</Form.Label>
                <Form.Select value={bloodRequest.state} onChange={(event) => {
                  const value = event.target.value;
                  console.log(value);
                  setBloodRequest({ ...bloodRequest, state: value });
                }}>
                  <option>Select...</option>
                  {stateOptions.map((option) => (
                    <option key={option.key} value={option.name}>
                      {option.name}
                    </option>
                  ))}                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="district">
                <Form.Label>District :</Form.Label>
                <Form.Control
                  value={bloodRequest.district}
                  onChange={(event) => {
                    const value = event.target.value;
                    console.log(value);
                    setBloodRequest({ ...bloodRequest, district: value });
                  }}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number : </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={bloodRequest.phone}
                onChange={(event) => {
                  const value = event.target.value;
                  console.log(value);
                  setBloodRequest({ ...bloodRequest, phone: value });
                }}
              />
            </Form.Group>

            <div className='d-flex justify-content-between'>
              <Button className="ms-3 fs-5" variant="success" type="submit" onClick={handleSubmit}>
                Submit
              </Button>

              <Button className="ms-5 fs-5" variant="warning" onClick={handleClose}>
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>

      {/* <ToastContainer theme="colored" position="top-center" autoClose={2000} limit={1}/> */}
    </>
  );
}

export default Request;

