import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div
      style={{ backgroundColor: "#E8E9ED" }}
      className="d-flex flex-column justify-content-center align-items-center p-5"
    >
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faGithub} className="fa-2x text-secondary" />
        <FontAwesomeIcon
          icon={faInstagram}
          className="fa-2x ms-3 text-secondary"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="fa-2x ms-3 text-secondary"
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          className="fa-2x ms-3 text-secondary"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="fa-2x ms-3 text-secondary"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Link
          to={"/register"}
          className="text-secondary ps-3 pe-3"
          style={{ borderRight: "1px solid #6C757D", textDecoration: "none" }}
        >
          donate
        </Link>
        <a
          href="#section-5"
          className="text-secondary ms-3  pe-3"
          style={{ borderRight: "1px solid #6C757D", textDecoration: "none" }}
        >
          services
        </a>
        <a
          href="#section-2"
          className="text-secondary ms-3 pe-3"
          style={{ textDecoration: "none" }}
        >
          about us
        </a>
      </div>
    </div>
  );
}

export default Footer;
