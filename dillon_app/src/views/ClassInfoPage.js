import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { Box, Typography, Card, Divider, IconButton } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function ClassInfo(props) {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  console.log("ID");
  console.log(id);
  useEffect(() => {
    async function getClasses() {
      const url = "/classes/info/" + id;
      console.log(id);

      const response = await axios.get(url).then((result) => {
        // get all class id's user is in
        console.log(result.data[0]);
        setDetails(result.data[0]);
      });
      return response;
    }
    getClasses();
  }, [id]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
      >
        <Box sx={{ height: "50vh", overflow: "hidden" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={details.image}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontWeight: 500, fontFamily: "Gill Sans" }}
          >
            {details.title}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: 200, fontFamily: "Gill Sans" }}
          >
            Dillon Athletics Room
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mt: 3,
              fontWeight: 500,
              textTransform: "uppercase",
              fontFamily: "Gill Sans",
            }}
          >
            {details.instructor}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative", textAlign: "center", color: "white" }}>
        <Box
          sx={{
            width: "10vw",
            height: "10vw",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Card
            sx={{
              borderRadius: "50%",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "none",
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", mb: "30%", fontWeight: 800 }}
            >
              60 MIN
            </Typography>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          mt: 20,
          position: "absolute",
          width: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mt: 2, fontWeight: 200, fontFamily: "Gill Sans" }}
        >
          Saturday, Nov 6
        </Typography>
        <Typography sx={{ fontWeight: 200, fontFamily: "Gill Sans" }}>
          11:30 AM - 12:30 PM
        </Typography>
        <Box sx={{ m: 2 }}>
          <IconButton sx={{ color: "black" }}>
            <CalendarTodayOutlinedIcon />
          </IconButton>
          <Typography
            variant="body2"
            sx={{ fontWeight: 200, fontFamily: "Gill Sans" }}
          >
            ADD TO CALENDAR
          </Typography>
        </Box>
        {/* <Typography>{details.date}</Typography> */}
        <Divider />
        <Typography sx={{ m: 2, fontWeight: 200, fontFamily: "Gill Sans" }}>
          {details.description}
        </Typography>
        <Typography>{details.numEnrolled}</Typography>
        <Typography>{"Upcoming Sessions:"}</Typography>
        {/* {details.nextSessions.forEach(date => {
          console.log(date)
        })} */}
        {/* {
          details.nextSessions.forEach(date => {
            console.log("This");
            console.log(date.toString());
            return <Typography>{date.toString()}</Typography>
          })
        } */}
      </Box>
    </Box>
  );
}
