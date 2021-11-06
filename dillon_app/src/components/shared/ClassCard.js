import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export default function MediaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: "300px",
        minWidth: "300px",
        m: 2,
        boxShadow: 4,
        borderRadius: "9%",
      }}
    >
      <CardActionArea href={`/class/${props.class.classId}`}>
        <CardMedia
          component="img"
          height="140"
          image={props.class.image}
          alt="yoga"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.class.name}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <AccessTimeOutlinedIcon />
            <Typography variant="body2" component="div">
              {props.class.time}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <LocationOnOutlinedIcon />
            <Typography variant="body2" component="div">
              {props.class.location}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
