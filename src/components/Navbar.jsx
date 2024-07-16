import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Navbar = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#c55555",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" }, marginRight: 2 }}
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <LanguageIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <Avatar
            alt="Admin"
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
