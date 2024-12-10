import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const PropertyCard = ({ property }) => (
  <Card sx={{ maxWidth: 345, margin: 2 }}>
    <CardMedia
      component="img"
      height="140"
      image={property.image}
      alt={property.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {property.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {property.location}
      </Typography>
      <Typography variant="h6" color="text.primary">
        ${property.price}
      </Typography>
    </CardContent>
  </Card>
);

export default PropertyCard;
