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
import { authenticationApi, registrationApi } from "../services/allApi";

const Registration = () => {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
    gender: "",
    password: "",
    bloodGroup: "",
    district: "",
    state: "",
    phone: "",
    type: "",
    lastDonation: "",
    history: [],
  });
  const navigate = useNavigate();

  const handleRegister = async () => {
    const {
      username,
      age,
      gender,
      password,
      bloodGroup,
      district,
      state,
      phone,
      type,
      lastDonation,
    } = userData;
    if (
      !username ||
      !age ||
      !gender ||
      !password ||
      !bloodGroup ||
      !district ||
      !state ||
      !phone ||
      !type ||
      (type == "donor" && !lastDonation)
    ) {
      toast.info("Please fill out the form completely");
    } else {
      if (age < 18) {
        toast.info("Donor age should be greater than 18");
        return;
      }
      const checkUser = await authenticationApi(phone, type);
      if (checkUser.data.length > 0) {
        toast.error("User already exists");
      } else {
        const result = await registrationApi(userData, userData.type);
        if (result.status >= 200 && result.status < 300) {
          toast.success("Registration Succesful");
          navigate("/login");
        }
      }
    }
  };
  return (
    <div className="container-fluid registration-wrapper">
      <div className="wrapper">
        <div className="form-box login">
          <form>
            <h3 className="fw-bold text-center">Registration</h3>
            <div className="d-flex">
              <div className="input-box">
                <input
                  className="p-2"
                  type="text"
                  placeholder="Username"
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  required
                />
                <FontAwesomeIcon className="icons" icon={faUser} />
              </div>
              <div className="input-box">
                <input
                  className="p-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
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
                  onChange={(e) =>
                    setUserData({ ...userData, bloodGroup: e.target.value })
                  }
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
                  placeholder="Age"
                  onChange={(e) =>
                    setUserData({ ...userData, age: e.target.value })
                  }
                  required
                />
                <FontAwesomeIcon className="icons" icon={faUser} />
              </div>
            </div>

            <div className="d-flex">
              <div className="input-box">
                <input
                  className="p-2"
                  type="text"
                  placeholder="Enter State"
                  onChange={(e) =>
                    setUserData({ ...userData, state: e.target.value })
                  }
                  required
                />
                <FontAwesomeIcon className="icons" icon={faFlag} />
              </div>

              <div className="input-box">
                <input
                  className="p-2"
                  type="text"
                  placeholder="Enter District"
                  onChange={(e) =>
                    setUserData({ ...userData, district: e.target.value })
                  }
                  required
                />
                <FontAwesomeIcon className="icons" icon={faLocationDot} />
              </div>
            </div>

            <div className="d-flex">
              <div className="input-box">
                <select
                  name="Select Role"
                  id="Role"
                  className="p-2"
                  onChange={(e) =>
                    setUserData({ ...userData, type: e.target.value })
                  }
                  required
                >
                  <option
                    id="val"
                    className="text-dark"
                    value=""
                    disabled
                    selected
                  >
                    Type
                  </option>
                  <option id="val" className="text-dark" value="recipient">
                    Recipient
                  </option>
                  <option id="val" className="text-dark" value="donor">
                    Donor{" "}
                  </option>
                </select>
              </div>

              <div className="input-box">
                <input
                  className="p-2"
                  type="tel"
                  placeholder="Enter Phone Number"
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                  required
                />
                <FontAwesomeIcon className="icons" icon={faPhone} />
              </div>
            </div>
            <div className="d-flex">
              <div className="input-box">
                <select
                  name="Select Gender"
                  id="Role"
                  className="p-2"
                  onChange={(e) =>
                    setUserData({ ...userData, gender: e.target.value })
                  }
                  required
                >
                  <option
                    id="val"
                    className="text-dark"
                    value=""
                    disabled
                    selected
                  >
                    Gender
                  </option>
                  <option id="val" className="text-dark" value="male">
                    Male
                  </option>
                  <option id="val" className="text-dark" value="female">
                    Female
                  </option>
                </select>
              </div>
              <div className="input-box">
                <input
                  className="p-2 text-light"
                  disabled={userData.type === "recipient" && true}
                  type="date"
                  placeholder="Password"
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      lastDonation: new Date(e.target.value).toLocaleDateString(
                        "en-GB"
                      ),
                    })
                  }
                  required
                />
              </div>
            </div>
            <button type="button" onClick={handleRegister}>
              Register
            </button>

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
