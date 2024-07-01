import React from "react";
import "./Home.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
                  <h5 className="text-light fw-bold nav-bar-txt mt-md-2 me-md-2">
                    HOME
                  </h5>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h5 className="text-light fw-bold nav-bar-txt mt-md-2 me-md-2">
                    ABOUT US
                  </h5>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h5 className="text-light fw-bold nav-bar-txt mt-md-2 me-md-2">
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
      </section>
    </>
  );
}

export default Home;
