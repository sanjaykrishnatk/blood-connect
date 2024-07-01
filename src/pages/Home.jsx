import React from "react";
import "./Home.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
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
            <span style={{ color: "#D70012" }}>hope</span> starts
            <br />
            with a <span style={{ color: "#D70012" }}>drop</span>
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
    </>
  );
}

export default Home;
