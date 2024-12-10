import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "aos/dist/aos.css";
import AOS from "aos";

const galleryImages = [
  "/assets/images/Group-75.jpg",
  "/assets/images/Group-76.jpg",
  "/assets/images/Group-77.jpg",
  "/assets/images/Group-78.jpg",
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box id="gallery" py={10} sx={{ backgroundColor: "#f4f4f4" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        sx={{ textTransform: "uppercase", color: "#4caf50" }}
        data-aos="fade-up"
      >
        Explore Our Gallery
      </Typography>
      <Grid container spacing={2}>
        {galleryImages.map((img, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "8px",
                transition: "transform 0.3s ease-in-out",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                style={{
                  width: "100%",
                  display: "block",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
