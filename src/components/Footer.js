import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import colors from "../utils/colors";

const Footer = () => (
  <Box
    id="footer"
    py={4}
    sx={{
      backgroundColor: colors.secondary,
      color: colors.txtColor,
      textAlign: "center",
    }}
  >
    <Typography variant="body2" mb={2}>
      © {new Date().getFullYear()} Housing Profile. All rights reserved.
    </Typography>
    <Box>
      <IconButton color="inherit">
        <Facebook />
      </IconButton>
      <IconButton color="inherit">
        <Instagram />
      </IconButton>
      <IconButton color="inherit">
        <Twitter />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;
