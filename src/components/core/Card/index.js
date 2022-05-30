import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useStyles } from "./Card.styles";

function ProductCard({ name, price, inStock, description, title, photo, kid }) {
  const classes = useStyles();
  return (
    <Card sx={{ minWidth: "45%", m: 5 }} key={kid}>
      <CardActionArea>
        <CardContent sx={{ display: { sm: "flex" } }}>
          <CardMedia
            sx={{
              width: { sm: 200, md: 300 },
              borderRadius: 1,
            }}
            component="img"
            image={photo}
            alt="green iguana"
          />
          <Grid
            sx={{
              pl: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography noWrap sx={{ my: 2 }} variant="h5" component="div">
              name: {name}
            </Typography>
            <Typography
              // noWrap
              // sx={{
              //   overflow: "hidden",
              //   textOverflow: "ellipsis",
              //   // width: "11rem",
              // }}
              variant="h6"
              color="text.secondary"
            >
              <b>Description: </b> {description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              <b>Price: </b>: &nbsp; ${price}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              <b>Title: </b>
              {title}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ProductCard;
