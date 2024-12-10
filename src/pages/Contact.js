import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Contact = () => (
  <Box id="contact" py={10} textAlign="center">
    <Typography variant="h4" fontWeight="bold" mb={4}>
      Contact Us
    </Typography>
    <Box
      component="form"
      maxWidth="sm"
      mx="auto"
      sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <TextField label="Your Name" variant="outlined" fullWidth />
      <TextField label="Your Email" variant="outlined" fullWidth />
      <TextField
        label="Your Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
      />
      <Button variant="contained" color="primary" size="large">
        Send Message
      </Button>
    </Box>
  </Box>
);

export default Contact;
