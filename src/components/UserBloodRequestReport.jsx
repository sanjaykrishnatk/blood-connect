import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Reportbloodrequest from '../pages/Reportbloodrequest';

const drawerWidth = 240;

const UserBloodRequestReport = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}
    >
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
      >

        <Toolbar />
        <Reportbloodrequest />
      </Box>
    </Box >
  );
};

export default UserBloodRequestReport;
