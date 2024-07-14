// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Admin from "../pages/Admin"; // Assuming Admin is the component showing your existing charts
import "./Dashboard.css";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const drawerWidth = 240;

const Dashboard = ({ home, requests, donorsPage, recipients }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState("home");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePage = (home, requests, donorsPage, recipients) => {
    if (home) {
      setPage("home");
    } else if (requests) {
      setPage("requests");
    } else if (donorsPage) {
      setPage("donorsPage");
    } else if (recipients) {
      setPage("recipients");
    }
  };

  const donors = {
    logo: "https://thumbs.dreamstime.com/b/blood-donors-logo-symbol-icon-your-needs-such-donor-sign-public-information-add-to-presentation-website-app-etc-154842885.jpg",
    title: "Donor",
    count: 100,
    month: "July",
    year: 2024,
  };

  const users = {
    logo: "https://cdn.dribbble.com/users/2620348/screenshots/10495041/media/b110a1631ac9ae054007f19bd98295c0.png?compress=1&resize=768x576&vertical=top",
    title: "User",
    count: 150,
    month: "July",
    year: 2024,
  };

  const totalDonors = {
    logo: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/74-1024.png",
    title: "Total Donors",
    count: 250,
    month: "July",
    year: 2024,
  };

  const sidebarContents = [
    {
      option: "Home",
      icon: "HomeIcon",
      link: "/admin",
    },
    {
      option: "Requests",
      icon: "RequestIcon",
      link: "/admin_requests",
    },
    {
      option: "Donors",
      icon: "DonorsIcon",
      link: "/admin_donors",
    },
    {
      option: "Recipients",
      icon: "RecipientsIcon",
      link: "/admin_recipients",
    },
  ];

  useEffect(() => {
    handlePage(home, requests, donorsPage, recipients);
  }, [home, requests, donorsPage, recipients]);
  console.log("page loaded is " + page);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        sidebarContents={sidebarContents}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
      >
        <Toolbar />

        <Admin page={page} />
      </Box>
    </Box>
  );
};

export default Dashboard;
