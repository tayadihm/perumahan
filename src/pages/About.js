import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import colors from "../utils/colors";

const About = () => (
  <Box id="about" py={10} px={4} sx={{ backgroundColor: colors.secondary }}>
    <Typography
      variant="h4"
      fontWeight="bold"
      textAlign="center"
      color={colors.primary}
      mb={4}
    >
      About Us
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography variant="body1" color={colors.txtColor}>
          Welcome to [Nama Perumahan], your trusted partner in finding the home
          of your dreams. With years of experience in the real estate industry,
          we strive to deliver modern and luxurious homes tailored to your
          needs.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="/assets/images/about-us.jpg"
          alt="About Us"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Grid>
    </Grid>
  </Box>
);

export default About;
