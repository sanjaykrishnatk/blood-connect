import React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Admin from "../pages/Admin";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - 240px)`,
          ml: `240px`,
        }}
      >
        <Navbar />
        <Toolbar />
        <Admin /> {/* Render the Admin component directly */}
      </Box>
    </Box>
  );
};

export default Dashboard;
