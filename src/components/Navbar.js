import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import colors from "../utils/colors"; // Pastikan path yang sesuai

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: colors.primary, // Gunakan warna primary pastel biru
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            onClick={scrollToTop}
            to="/"
            sx={{
              textDecoration: "none",
              color: colors.secondary, // Gunakan warna pastel putih untuk logo
              fontWeight: "bold",
            }}
          >
            Housing Profile
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              component={Link}
              to="/"
              onClick={scrollToTop}
              sx={{
                color: colors.txtColor, // Gunakan warna teks default
                "&:hover": { color: colors.linkColor }, // Gunakan warna hover pastel coral
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/properties"
              sx={{
                color: colors.txtColor,
                "&:hover": { color: colors.linkColor },
              }}
            >
              Properties
            </Button>
            <Button
              component={Link}
              to="/about-us"
              sx={{
                color: colors.txtColor,
                "&:hover": { color: colors.linkColor },
              }}
            >
              About Us
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={{
                color: colors.txtColor,
                "&:hover": { color: colors.linkColor },
              }}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/" onClick={scrollToTop}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/properties">
              <ListItemText primary="Properties" />
            </ListItem>
            <ListItem button component={Link} to="/about-us">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
