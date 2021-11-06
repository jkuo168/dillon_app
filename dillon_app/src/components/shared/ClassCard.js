import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";
import { shadows, borders } from '@mui/system';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 200, m: 1, boxShadow: 10, borderRadius: '9%'}}>
      <CardActionArea href={`/class/${props.class.classId}`}>
        <CardMedia
          component="img"
          height="140"
          image="https://static01.nyt.com/images/2016/12/06/well/move/yoga-for-everyone_promo/yoga-for-everyone_promo-superJumbo-v2.jpg"
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
