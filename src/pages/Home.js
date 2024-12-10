import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </Box>
  );
};

export default Home;
