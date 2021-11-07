import React from "react";
import {
  //   Box,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export default function MediaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: "300px",
        minWidth: "300px",
        m: 1,
        mb: 2,
        boxShadow: 4,
        borderRadius: 2,
      }}
    >
      <CardActionArea
        href={`/category/${props.category.name}/${props.category.id}`}
      >
        <CardMedia
          component="img"
          height="140"
          image={props.category.image}
          alt="yoga"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ textAlign: "center" }}>
            {props.category.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
