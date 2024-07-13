// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Admin from "../pages/Admin"; // Assuming Admin is the component showing your existing charts
import "./Dashboard.css";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
      >
        <Toolbar />

        <Admin />
      </Box>
    </Box>
  );
};

export default Dashboard;
