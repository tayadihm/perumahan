import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data properti dari backend
    axios
      .get("http://localhost:8080/api/properties") // Ganti URL dengan endpoint backend Anda
      .then((response) => {
        setProperties(response.data); // Simpan data properti di state
      })
      .catch((error) => {
        console.error("Gagal mengambil data properti:", error);
      });
  }, []);

  return (
    <Box sx={{ py: 6, px: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Daftar Properti
      </Typography>
      <Typography variant="subtitle1" textAlign="center" mb={4}>
        Temukan properti impian Anda di sini
      </Typography>
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={property.image || "/placeholder.jpg"} // Placeholder jika tidak ada gambar
                alt={property.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {property.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.location}
                </Typography>
                <Typography variant="body1" fontWeight="bold" mt={1}>
                  Rp{property.price.toLocaleString("id-ID")}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Lihat Detail
                </Button>
                <Button size="small" color="secondary">
                  Hubungi
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Properties;
