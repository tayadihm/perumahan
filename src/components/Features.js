import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const features = [
  {
    title: "Prime Location",
    description: "Located in a strategic and prestigious area.",
    image: "/images/location.jpg",
  },
  {
    title: "Modern Design",
    description: "Aesthetically pleasing and functional homes.",
    image: "/images/design.jpg",
  },
  {
    title: "Affordable Prices",
    description: "Luxury living within reach.",
    image: "/images/price.jpg",
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      id="features"
      py={10}
      textAlign="center"
      sx={{ backgroundColor: "#f9f9f9" }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{ textTransform: "uppercase", color: "#4caf50" }}
        data-aos="fade-up"
      >
        Why Choose Us?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <Card
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={feature.image}
                alt={feature.title}
                sx={{ borderRadius: "16px 16px 0 0" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="primary"
                  mb={1}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
