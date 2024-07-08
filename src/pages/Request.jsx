import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Request() {
  const [bloodRequest, setBloodRequest] = useState({
    userName: "",
    bloodgrp: "",
    unit: "",
    age: "",
    gender: "",
    state: "",
    district: "",
    email: "",
    phone: "",
  });

  const [startDate, setStartDate] = useState(new Date());

  return (
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
                  />
                  <Form.Check
                    inline
                    label="female"
                    name="group1"
                    type={type}
                    id={`inline-${type}-female`}
                  />
                  <Form.Check
                    inline
                    label="Other"
                    type={type}
                    id={`inline-${type}-other`}
                  />
                </div>
              ))}
            </Form.Group>

          </Row> 

          <Row className="mb-3">
            <Form.Group as={Col} controlId="bloodgrp">
              <Form.Label>Blood Group : </Form.Label>
              <Form.Select aria-label="Blood Group">
                <option>A+</option>
                <option value="A+">A+</option>
                <option value="O+">O+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB</option>
                <option value="A-">A-</option>
                <option value="O-">O-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
              </Form.Select>
            </Form.Group>


               <Form.Group as={Col} controlId="date">
              <Form.Label>Blood Required Date : </Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Group>


            <Form.Group as={Col} controlId="unit">
              <Form.Label>Units required :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Units"
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
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option> onChange=
                {(event) => {
                  const value = event.target.value;
                  console.log(value);
                  setBloodRequest({ ...bloodRequest, state: value });
                }}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="district">
              <Form.Label>District :</Form.Label>
              <Form.Control
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
              onChange={(event) => {
                const value = event.target.value;
                console.log(value);
                setBloodRequest({ ...bloodRequest, phone: value });
              }}
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Request;

