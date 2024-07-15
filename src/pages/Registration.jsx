import "./Registration.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
  faPhone,
  faFlag,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [blood, setBlood] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const validateMobile = (mobile) => {
    return mobile.length === 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (name.trim() === "") {
      setError("Name is required");
      return;
    }
    if (!validateMobile(mobile)) {
      setError("Mobile number must be 10 digits");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (district.trim() === "") {
      setError("District is required");
      return;
    }

    if (state.trim() === "") {
      setError("State is required");
      return;
    }

    if (blood === "") {
      setError("Blood Group not selected");
      return;
    }
  };
  return (
    <div className="container-fluid registration-wrapper">
      <div className="wrapper">
        <div className="form-box login">
          {error && <p className="error text-center">{error}</p>}
          <form action="" onSubmit={handleSubmit}>
            <h3 className="fw-bold text-center">Registration</h3>
            <div className="d-flex">
              <div className="input-box">
                <input
                  className="p-2"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <FontAwesomeIcon className="icons" icon={faUser} />
              </div>
              <div className="input-box">
                <input
                  className="p-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FontAwesomeIcon className="icons" icon={faLock} />
              </div>
            </div>

            <div className="d-flex">
              <div className="input-box">
                <select
                  name="Select Blood Group"
                  id="blood"
                  className="p-2"
                  onChange={(e) => setBlood(e.target.value)}
                  required
                >
                  <option
                    id="val"
                    className="text-dark"
                    value=""
                    disabled
                    selected
                  >
                    Choose blood group
                  </option>
                  <option id="val" className="text-dark" value="A+">
                    A+ve
                  </option>
                  <option id="val" className="text-dark" value="A-">
                    A-ve
                  </option>
                  <option id="val" className="text-dark" value="B+">
                    B+ve
                  </option>
                  <option id="val" className="text-dark" value="B-">
                    B-ve
                  </option>
                  <option id="val" className="text-dark" value="AB+">
                    AB+ve
                  </option>
                  <option id="val" className="text-dark" value="AB-">
                    AB-ve
                  </option>
                  <option id="val" className="text-dark" value="O+">
                    O+ve
                  </option>
                  <option id="val" className="text-dark" value="O-">
                    O-ve
                  </option>
                </select>
              </div>

              <div className="input-box">
                <input
                  className="p-2"
                  type="text"
                  placeholder="Enter District"
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
                <FontAwesomeIcon className="icons" icon={faLocationDot} />
              </div>
            </div>

            <div className="d-flex">
              <div className="input-box">
                <input
                  className="p-2"
                  type="text"
                  placeholder="Enter State"
                  onChange={(e) => setState(e.target.value)}
                  required
                />
                <FontAwesomeIcon className="icons" icon={faFlag} />
              </div>

              <div className="input-box">
                <input
                  className="p-2"
                  type="tel"
                  placeholder="Enter Phone Number"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
                <FontAwesomeIcon className="icons" icon={faPhone} />
              </div>
            </div>
            <div className="mt-3 ms-3">
              <h5 style={{ fontSize: "15px" }}>Choose your Role:</h5>
              <div className="d-flex justify-content-between ps-5 pe-5">
                <label id="label1">
                  <input
                    type="radio"
                    name="role"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                    required
                    className="me-2"
                  />
                  Donor
                </label>
                <label id="label2">
                  <input
                    type="radio"
                    name="role"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                    required
                    className="me-2"
                  />
                  Recipient
                </label>
              </div>
            </div>

            <button type="submit">Register</button>

            <div className="remember-forget mt-4">
              <label>
                <input type="checkbox" />I agree to all terms & conditions.
              </label>
              <a href="#" style={{ color: "white" }}>
                Forgot Password?
              </a>
            </div>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <Link style={{ color: "white" }} to="/Login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
