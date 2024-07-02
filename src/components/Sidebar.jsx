
import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#3f51b5', 
          color: '#fff', 
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon><HomeIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/admin">
            <ListItemIcon><AdminPanelSettingsIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
          <ListItem button component={Link} to="/user">
            <ListItemIcon><PersonIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="User" />
          </ListItem>
          <ListItem button component={Link} to="/donor">
            <ListItemIcon><FavoriteIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Donor" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
