import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HelpIcon from "@mui/icons-material/Help"; // Import Help icon
import RequestIcon from "@mui/icons-material/RequestPage"; // Assuming a suitable icon
import DonorsIcon from "@mui/icons-material/People"; // Assuming a suitable icon
import RecipientsIcon from "@mui/icons-material/Person"; // Assuming a suitable icon
const drawerWidth = 240;

const Sidebar = ({
  mobileOpen,
  handleDrawerToggle,
  userRole,
  sidebarContents,
}) => {
  console.log(sidebarContents);
  const iconMap = {
    HomeIcon: HomeIcon,
    RequestIcon: RequestIcon,
    DonorsIcon: DonorsIcon,
    RecipientsIcon: RecipientsIcon,
  };
  const drawer = (
    <div>
      <Toolbar>
        <Box
          component="img"
          src="logo1.png"
          alt="Logo"
          sx={{
            height: 90,
            width: "auto",
            margin: "0 auto",
            display: "block",
            padding: "10px 0",
          }}
        />
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {sidebarContents.map((option, index) => {
            const IconComponent = iconMap[option.icon];
            return (
              <ListItem key={index} button component={Link} to="/">
                <ListItemIcon>
                  <IconComponent sx={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={option.option} />
              </ListItem>
            );
          })}
          {/* <ListItem button component={Link} to="/admin">
            <ListItemIcon>
              <AdminPanelSettingsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
          <ListItem button component={Link} to="/user">
            <ListItemIcon>
              <PersonIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItem>
          <ListItem button component={Link} to="/donorpage">
            <ListItemIcon>
              <FavoriteIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Donor" />
          </ListItem>
          <ListItem button component={Link} to="/userdashboard">
            <ListItemIcon>
              <FavoriteIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Blood Request" />
          </ListItem>
          <ListItem button component={Link} to="/requestreport">
            <ListItemIcon>
              <FavoriteIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Request Report" />
          </ListItem>
          <ListItem button component={Link} to="/help">
            {" "}
            <ListItemIcon>
              <HelpIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem> */}
        </List>
      </Box>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#c55555",
            color: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#c55555",
            color: "#fff",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
