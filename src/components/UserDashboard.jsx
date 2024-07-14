import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Request from "../pages/Request";
import Reportbloodrequest from "../pages/Reportbloodrequest";
const drawerWidth = 240;

const UserDashboard = ({ userHome, userRequests }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState("userHome");
  const handlePage = (userHome, userRequests) => {
    if (userHome) {
      setPage("userHome");
    } else if (userRequests) {
      setPage("userRequests");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContents = [
    {
      option: "Home",
      icon: "HomeIcon",
      link: "/userdashboard",
    },
    {
      option: "Requests",
      icon: "RequestIcon",
      link: "/user_requests",
    },
  ];

  useEffect(() => {
    handlePage(userHome, userRequests);
  }, [userHome, userRequests]);

  return (
    <Box //sx={{ display: 'flex' }}
    >
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        sidebarContents={sidebarContents}
      />
      <Box
        component="main"
        //sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {page == "userHome" && <Request />}
        {page == "userRequests" && <Reportbloodrequest />}
      </Box>
    </Box>
  );
};

export default UserDashboard;
