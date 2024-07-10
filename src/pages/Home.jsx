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
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { getDonorsByBloodGroupApi, smsApi } from "../services/allApi";
function Home() {
  const handleRequest = async (bloodGroup) => {
    console.log(bloodGroup);
    const response = await getDonorsByBloodGroupApi(bloodGroup);
    const mobileNumbers = response.data.map((item) => item.phone).toString();
    console.log(mobileNumbers);
    await Promise.all(
      response.data.map(async (item) => {
        let message = {
          route: "q",
          message: `Hi ${item?.username}, An urgent blood donation request matches your profile. Your help can save a life! Click here for details and to confirm your donation: https://blood-connect-seven.vercel.app/ 
Thank you,
BloodConnect Team`,
          flash: 0,
          numbers: item?.phone,
        };
        const response = await smsApi(message);
        console.log(response.data);
      })
    );
  };
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
                    onClick={() => handleRequest("A+")}
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
          <p className="text-center text-secondary mb-5 section-5-sub-txt">
            Empowering Communities with Lifesaving Blood. Every Drop, a Step
            Toward Hope.
          </p>
          <div className="services-wrapper d-flex  justify-content-center align-items-center w-100 services-section ">
            <Col
              sm={12}
              md={3}
              className="mb-5 d-flex  justify-content-center align-items-center"
            >
              <Card style={{ width: "18rem" }} className="rounded-0  shadow">
                <Card.Img
                  variant="top"
                  src="/blood-donation.jpg"
                  style={{ width: "100%", height: "200px" }}
                  className="rounded-0"
                />
                <Card.Body className="p-5">
                  <Card.Title className="fw-bold">
                    Connecting Recipients to Donors
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Efficiently connecting blood donors with patients in urgent
                    need of transfusions through technology
                  </Card.Text>
                  <Link
                    className="text-secondary fw-bold"
                    to={"/"}
                    style={{ textDecoration: "none", fontSize: "12px" }}
                  >
                    KNOW MORE
                  </Link>
                </Card.Body>
              </Card>{" "}
            </Col>

            {/* <Col
              sm={12}
              md={3}
              className="mb-5 d-flex  justify-content-center align-items-center"
            >
              <Card style={{ width: "18rem" }} className="rounded-0  shadow">
                <Card.Img
                  variant="top"
                  src="/blood-drive.png"
                  style={{ width: "100%", height: "200px" }}
                  className="rounded-0"
                />
                <Card.Body className="p-5">
                  <Card.Title className="fw-bold">
                    Organizing Blood Drives
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Hosting and managing community blood donation events to
                    ensure a steady and reliable blood supply for all.
                  </Card.Text>
                  <Link
                    className="text-secondary fw-bold"
                    to={"/"}
                    style={{ textDecoration: "none", fontSize: "12px" }}
                  >
                    KNOW MORE
                  </Link>
                </Card.Body>
              </Card>{" "}
            </Col> */}

            <Col
              sm={12}
              md={3}
              className="mb-5 d-flex  justify-content-center align-items-center"
            >
              <Card style={{ width: "18rem" }} className="rounded-0  shadow">
                <Card.Img
                  variant="top"
                  src="/blood-drive.png"
                  style={{ width: "100%", height: "200px" }}
                  className="rounded-0"
                />
                <Card.Body className="p-5">
                  <Card.Title className="fw-bold">
                    Organizing Blood Drives
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Hosting and managing community blood donation events to
                    ensure a steady and reliable blood supply for all.
                  </Card.Text>
                  <Link
                    className="text-secondary fw-bold"
                    to={"/"}
                    style={{ textDecoration: "none", fontSize: "12px" }}
                  >
                    KNOW MORE
                  </Link>
                </Card.Body>
              </Card>{" "}
            </Col>
            <Col
              sm={12}
              md={3}
              className="mb-5 d-flex  justify-content-center align-items-center"
            >
              <Card style={{ width: "18rem" }} className="rounded-0  shadow">
                <Card.Img
                  variant="top"
                  src="/blood-pack.jpg"
                  style={{ width: "100%", height: "200px" }}
                  className="rounded-0"
                />
                <Card.Body className="p-5">
                  <Card.Title className="fw-bold">
                    Emergency Blood Distribution
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Coordinating the rapid and efficient delivery of blood to
                    hospitals and patients during critical emergencies.
                  </Card.Text>
                  <Link
                    className="text-secondary fw-bold"
                    to={"/"}
                    style={{ textDecoration: "none", fontSize: "12px" }}
                  >
                    KNOW MORE
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Row>
      </section>
      <section id="section-6">
        <Row
          className="w-100 ms-0 me-0 d-flex align-items-center ps-md-5 banner-content"
          style={{
            backgroundImage: "url('/panoramic-banner.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "230px",
          }}
        >
          <h1 className="banner-header " style={{ color: "#DF1626" }}>
            100+
            <br />
            Donors
          </h1>
          <h1 className="banner-header " style={{ color: "#DF1626" }}>
            200+
            <br />
            Lives Saved
          </h1>
        </Row>
      </section>
      <section id="section-7">
        <Row
          className="ms-0 me-0 w-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#DF1626",
            padding: "60px",
          }}
        >
          <h1 className="donor-header text-center">Become a Donor</h1>
          <Button
            variant="light"
            style={{
              color: "#DF1626",
              width: "100px",
              backgroundColor: "#DFDFDF",
            }}
            className="fw-bold"
          >
            DONATE
          </Button>{" "}
        </Row>
      </section>
    </>
  );
}

export default Home;
