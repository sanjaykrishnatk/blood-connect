import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Donorpage from "../pages/Donorpage"; // Imported Donorpage component
import "./Dashboard.css";

const drawerWidth = 240;

const DonorDashboard = ({ donorHome, donorRequests, donorHistory }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [page, setPage] = useState("home");

  const handlePage = (donorHome, donorRequests, donorHistory) => {
    if (donorHome) {
      setPage("home");
    } else if (donorRequests) {
      setPage("requests");
    } else if (donorHistory) {
      setPage("history");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const sidebarContents = [
    {
      option: "Home",
      icon: "HomeIcon",
      link: "/donorpage",
    },
    {
      option: "Requests",
      icon: "RequestIcon",
      link: "/donor_requests",
    },
    {
      option: "Donation History",
      icon: "DonorsIcon",
      link: "/donor_history",
    },
  ];
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser)[0]);
      console.log(JSON.parse(loggedInUser)[0]);
    }
    handlePage(donorHome, donorRequests, donorHistory);
  }, [donorHome, donorRequests, donorHistory]);

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
        <Donorpage userID={user.id} page={page} />
      </Box>
    </Box>
  );
};

export default DonorDashboard;
