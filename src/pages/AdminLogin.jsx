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

const AdminLogin = () => {
  const [userData, setUserData] = useState({
    phone: "",
    password: "",
    type: "",
  });
  const navigate = useNavigate();
  console.log(userData);

  const handleLogin = async () => {
    const { phone, password, type } = userData;
    if (!phone || !password || !type) {
      toast.info("Please fill out the form completely");
    } else {
      const checkUser = await authenticationApi(phone, type);
      if (checkUser.data.length > 0) {
        const userDetails = checkUser.data;
        if (password == userDetails[0].password) {
          toast.success("Login Succesfull");
          if (userDetails[0].type == "donor") {
            sessionStorage.setItem("user", JSON.stringify(userDetails));
            navigate("/donorpage");
          } else {
            sessionStorage.setItem("user", JSON.stringify(userDetails));
            navigate("/userdashboard");
          }
        } else {
          toast.error("Invalid Password");
        }
      } else {
        toast.error("User doesn't exists");
        navigate("/register");
      }
    }
  };
  return (
    <div className="container-fluid registration-wrapper">
      <div className="wrapper">
        <div className="form-box login">
          <form>
            <h3 className="fw-bold text-center">Login</h3>

            <div className="input-box">
              <input
                className="p-2"
                type="text"
                placeholder="Phone"
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
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

            <button type="button" onClick={handleLogin}>
              Login
            </button>

            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <Link style={{ color: "white" }} to="/register">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
