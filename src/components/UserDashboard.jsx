import React, { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Request from "../pages/Request";

const drawerWidth = 240;

const UserDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContents = [
    {
      option: "Home",
      icon: "HomeIcon",
      link: "",
    },
    {
      option: "Requests",
      icon: "RequestIcon",
      link: "",
    },
    {
      option: "Donors",
      icon: "DonorsIcon",
      link: "",
    },
    {
      option: "Recipients",
      icon: "RecipientsIcon",
      link: "",
    },
  ];
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
        <Request />
      </Box>
    </Box>
  );
};

export default UserDashboard;
