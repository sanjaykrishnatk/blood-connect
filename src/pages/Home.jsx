import React from "react";
import "./Home.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faHandshakeAngle,
  faHeartPulse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <section id="landing">
        <Navbar expand="lg" className="bg-body-transparent">
          <Container>
            <Navbar.Brand href="#home" style={{ width: "79%" }}>
              <img src="logo1.png" alt="logo" className="w-25" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ width: "50%" }}>
              <Nav className="ms-auto d-flex justify-content-center align-items-center">
                <Nav.Link href="#home">
                  <h5 className=" fw-bold nav-bar-txt mt-md-2 me-md-2">HOME</h5>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h5 className=" fw-bold nav-bar-txt mt-md-2 me-md-2">
                    ABOUT US
                  </h5>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h5 className=" fw-bold nav-bar-txt mt-md-2 me-md-2">
                    SERVICES
                  </h5>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <Button
                    variant="danger"
                    style={{ backgroundColor: "#DF1626" }}
                    className="fw-bold"
                  >
                    DONATE
                  </Button>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row className="ms-0 me-0 w-100 d-flex flex-column pb-5">
          <h1 className=" landing-header mb-0" style={{ marginTop: "100px" }}>
            <span style={{ color: "#DF1626" }}>hope</span> starts
            <br />
            with a <span style={{ color: "#DF1626" }}>drop</span>
          </h1>
          <h4 className="mb-0 fw-bold tagline">
            Be the Reason Someone Smiles Today
          </h4>
          <Row className="me-0 ms-0 d-flex mt-3 landing-btns">
            <Button
              variant="light fw-bold rounded-1 p-2"
              style={{ width: "125px" }}
            >
              Get Started
            </Button>{" "}
            <Button
              variant="danger fw-bold rounded-1 ms-3 p-2"
              style={{ width: "125px" }}
            >
              Donate Now
            </Button>{" "}
          </Row>
        </Row>
      </section>
      <section id="section-2">
        <Row className="ms-0 me-0 w-100">
          <Col
            md={6}
            sm={12}
            className="d-flex flex-column  align-items-center "
          >
            <div className="sec-2-content d-flex flex-column ">
              <h1 className="md-mb-0 impact-header">
                Making an
                <br />
                <span style={{ color: "#DF1626" }}>Impact Together</span>
              </h1>
              <p className="impact-sub-txt md-mt-2 md-mb-3 sm-mb-5 text-secondary">
                At BloodConnect, we unite donors and patients to ensure a steady
                blood supply. Join us in saving lives and supporting our
                community through donation and awareness. Together, we make a
                difference.
              </p>
              <Button variant="dark" className="rounded-1  know-more-btn">
                KNOW MORE
              </Button>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <Row className="ms-0 me-0 d-flex">
              <Col md={6} sm={12} className="d-flex flex-column impact-column ">
                <FontAwesomeIcon
                  icon={faHeartPulse}
                  style={{ backgroundColor: "white", width: "30px" }}
                  className="fa-2xl p-2 rounded-circle"
                />
                <h5 className="mt-3 mb-2 fw-bold">Save Lives</h5>
                <p
                  className="mb-0 text-secondary"
                  style={{ paddingRight: "21%" }}
                >
                  Connecting donors with those in urgent need of blood, we help
                  save lives.
                </p>
              </Col>
              <Col md={6} sm={12} className="d-flex flex-column impact-column">
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ backgroundColor: "white", width: "30px" }}
                  className="fa-2xl p-2 rounded-circle"
                />
                <h5 className="mt-3 mb-2 fw-bold">Blood Drive</h5>
                <p
                  className="mb-0 text-secondary"
                  style={{ paddingRight: "21%" }}
                >
                  By hosting and coordinating community blood drives, we bring
                  people together for a common cause.
                </p>
              </Col>
            </Row>
            <Row className="ms-0 me-0 d-flex mt-4">
              <Col md={6} sm={12} className="d-flex flex-column impact-column">
                <FontAwesomeIcon
                  icon={faDroplet}
                  style={{ backgroundColor: "white", width: "30px" }}
                  className="fa-2xl p-2 rounded-circle"
                />
                <h5 className="mt-3 mb-2 fw-bold">Donate Blood</h5>
                <p
                  className="mb-0 text-secondary"
                  style={{ paddingRight: "21%" }}
                >
                  Your blood donation can save multiple lives. Be a hero today.
                </p>
              </Col>
              <Col md={6} sm={12} className="d-flex flex-column impact-column">
                <FontAwesomeIcon
                  icon={faHandshakeAngle}
                  style={{ backgroundColor: "white", width: "30px" }}
                  className="fa-2xl p-2 rounded-circle"
                />
                <h5 className="mt-3 mb-2 fw-bold">Join Our Volunteer Team</h5>
                <p
                  className="mb-0 text-secondary"
                  style={{ paddingRight: "21%" }}
                >
                  Becoming a volunteer means actively contributing to
                  life-saving efforts and spreading crucial awareness.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section id="section-3">
        <Row className="me-0 ms-0 w-100">
          <Col md={6} sm={12} className="d-flex  align-items-center">
            <img src="/v2.gif" alt="blood-img" className="blood-donation-img" />
          </Col>
          <Col
            md={6}
            sm={12}
            className="d-flex flex-column justify-content-center section-3-content"
          >
            <h1 className="section-3-header">
              A Drop of <span style={{ color: "#DF1626" }}> Hope</span>
            </h1>
            <p className="text-secondary">
              Join us for "A Drop of Hope," where every blood donation brings
              new life and renewed hope to those in need. Your contribution can
              make a world of difference, turning small acts into life-saving
              miracles. Be a part of this inspiring event and help us save
              lives, one drop at a time.
            </p>
          </Col>
        </Row>
      </section>
      <section id="section-4">
        <Row className="ms-0 me-0 w-100 md-p-0">
          <iframe
            className="p-md-0"
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/HE_UAUyEje0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Row>
      </section>
      <section id="section-5">
        <Row className="ms-0 me-0 w-100">
          <h1 className="text-center services-header">
            Our <span style={{ color: "#DF1626" }}>Services</span>
          </h1>
        </Row>
      </section>
    </>
  );
}

export default Home;
