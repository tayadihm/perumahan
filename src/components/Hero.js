import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import colors from "../utils/colors"; // Mengimpor colors yang sudah diperbarui

const Hero = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)
        ), url('/assets/images/pond.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: colors.secondary, // Menggunakan warna soft pastel putih
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <Box data-aos="fade-up">
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            mb: 2,
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
            color: colors.primary, // Menggunakan warna pastel biru muda
            [theme.breakpoints.down("sm")]: {
              fontSize: "2.5rem",
            },
          }}
        >
          Find Your Dream Home
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
            color: colors.txtColor, // Menggunakan warna teks yang lebih gelap
            [theme.breakpoints.down("sm")]: {
              fontSize: "1rem",
            },
          }}
        >
          Discover luxurious and modern housing at affordable prices.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#features"
          sx={{
            backgroundColor: colors.accent, // Menggunakan warna pastel peach
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: colors.linkColor, // Menggunakan warna coral untuk hover
              transform: "scale(1.1)",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.6)",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
