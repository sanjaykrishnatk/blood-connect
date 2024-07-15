import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  addRequestApi,
  getDonorsByBloodGroupApi,
  smsApi,
} from "../services/allApi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import stateOptions from "../services/states";

function Request({ phoneNo }) {
  const initialBloodRequest = {
    userName: "",
    bloodGroup: "",
    unit: "",
    age: "",
    gender: "",
    state: "",
    district: "",
    phone: phoneNo,
    donorList: [],
    currentUnit: 0,
    startDate: new Date(),
  };

  const [bloodRequest, setBloodRequest] = useState({ ...initialBloodRequest });

  const bloodGroupOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleClose = () => {
    setBloodRequest({ ...initialBloodRequest });
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      userName,
      bloodGroup,
      unit,
      age,
      gender,
      state,
      district,
      phone,
      startDate,
      donorList,
      currentUnit,
    } = bloodRequest;
    const formattedStartDate = startDate.toLocaleDateString("en-GB");

    // console.log({ ...bloodRequest, phone: phoneNo });
    if (
      !userName ||
      !bloodGroup ||
      !unit ||
      !age ||
      !gender ||
      !state ||
      !district ||
      !startDate
    ) {
      toast.info("Please fill the form completely");
    } else {
      // const result = await addRequestApi(bloodRequest)
      // console.log(result);
      console.log(bloodRequest);
      const result = await addRequestApi({
        ...bloodRequest,
        phone: phoneNo,
        startDate: formattedStartDate,
      });

      if (result.status >= 200 && result.status < 300) {
        const rid = result.data.id;
        handleClose();
        toast.success("Form Submitted Successfully");
        const donorDetails = await getDonorsByBloodGroupApi(bloodGroup);
        console.log(donorDetails.data);
        const eligibleDonors = donorDetails.data.filter((donor) =>
          atleastThreeMonths(donor.lastDonation, formattedStartDate)
        );
        console.log(eligibleDonors);
        const mobileNumbers = eligibleDonors
          .map((item) => item.phone)
          .toString();
        console.log(mobileNumbers);
        await Promise.all(
          eligibleDonors.map(async (item) => {
            let message = {
              route: "q",
              message: `Hi ${item?.username}, An urgent blood donation request matches your profile. Your help can save a life! Click here for details and to confirm your donation: https://blood-connect-seven.vercel.app/accept?rid=${rid}&did=${item.id}

      Thank you,
      BloodConnect Team`,
              flash: 0,
              numbers: item?.phone,
            };
            const smsResponse = await smsApi(message);
            console.log(smsResponse.data);
          })
        );
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div className=" mt-5 mb-5 d-flex justify-content-center align-items-center">
        <div className="bg-light p-5 rounded">
          <h1 className="text-danger">Blood Request Form</h1>

          <Form>
            <Row className="mb-5">
              <Form.Group as={Col} controlId="username">
                <Form.Label>Patient's Name : </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
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
                      label="Male"
                      name="group1"
                      type={type}
                      id={`inline-${type}-male`}
                      value="male"
                      checked={bloodRequest.gender === "male"}
                      onChange={(event) => {
                        const value = event.target.value;
                        console.log(value);
                        setBloodRequest({ ...bloodRequest, gender: value });
                      }}
                    />
                    <Form.Check
                      inline
                      label="Female"
                      name="group1"
                      type={type}
                      id={`inline-${type}-female`}
                      value="female"
                      checked={bloodRequest.gender === "female"}
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
                <Form.Select
                  aria-label="Blood Group"
                  value={bloodRequest.bloodGroup}
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
                  onChange={(date) =>
                    setBloodRequest({ ...bloodRequest, startDate: date })
                  }
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
                <Form.Select
                  value={bloodRequest.state}
                  onChange={(event) => {
                    const value = event.target.value;
                    console.log(value);
                    setBloodRequest({ ...bloodRequest, state: value });
                  }}
                >
                  <option>Select...</option>
                  {stateOptions.map((option) => (
                    <option key={option.key} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Form.Select>
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
                value={phoneNo}
                readOnly
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button
                className="ms-3 fs-5"
                variant="danger"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>

              <Button
                className="ms-5 fs-5"
                variant="warning"
                onClick={handleClose}
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Request;
