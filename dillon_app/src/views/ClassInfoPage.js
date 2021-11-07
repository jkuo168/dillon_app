import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { Box, Typography, Card, Divider, IconButton } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AppBar from "../components/shared/AppBar";
import Link from "@mui/material/Link";
import Facepile from "../components/shared/Facepile";
export default function ClassInfo(props) {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [register, setRegister] = useState("Register");
  const [numEnrolled, setNumEnrolled] = useState(0);

  console.log("ID");
  console.log(id);

  function isToday(date) {
    const dateObj = new Date(date);
    const now = new Date();
    return (
      dateObj.getDate() === now.getDate() &&
      dateObj.getMonth() === now.getMonth() &&
      dateObj.getFullYear() === now.getFullYear()
    );
  }
  useEffect(() => {
    async function getClasses() {
      const url = "/classes/info/" + id;
      console.log(id);

      const response = await axios.get(url).then((result) => {
        // get all class id's user is in
        console.log("NOT GO");
        console.log(result.data[0]);
        setDetails(result.data[0]);
        setNumEnrolled(result.data[0].numEnrolled);
      });
      return response;
    }
    getClasses();
  }, [id]);

  return (
    <Box>
      <AppBar />
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
              sx={{ textAlign: "center", mb: "5%", fontWeight: 800 }}
            >
              60 MIN
            </Typography>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          mt: "20%",
          position: "absolute",
          width: "100%",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mt: 2, fontWeight: 400, fontFamily: "Gill Sans" }}
        >
          Saturday, Nov 6
        </Typography>
        <Typography sx={{ fontWeight: 200, fontFamily: "Gill Sans" }}>
          11:30 AM - 12:30 PM
        </Typography>
        <Typography sx={{ fontWeight: 200, fontFamily: "Gill Sans" }}>
          Attendees: {numEnrolled}
        </Typography>
        <div
          style={{ marginTop: "1%", display: "flex", justifyContent: "center" }}
        >
          <Facepile numEnrolled={numEnrolled}></Facepile>
        </div>
        <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}>
          {console.log("Blah")}
          {console.log(details)}
          {details && !isToday(details.date) && (
            <Link
              onClick={() => {
                setRegister("Registered!");
                setNumEnrolled(numEnrolled + 1);
              }}
              variant="body2"
              underline="none"
              sx={{
                color: "#F78812",
                fontWeight: "500",
                fontSize: "1.5em",
                fontFamily: "Gill Sans",
              }}
            >
              {register}
            </Link>
          )}
          {
            details && isToday(details.date) && (
              <Link
                href={"/video/" + id}
                underline="none"
                variant="body2"
                sx={{
                  color: "#F78812",
                  fontWeight: 500,
                  fontFamily: "Gill Sans",
                }}
              >
                {"JOIN CLASS"}
              </Link>
            )
            /*{/* <Typography
              variant="body2"
              sx={{ fontWeight: 200, fontFamily: "Gill Sans" }}
            >
              JOIN CLASS
            </Typography>} */
          }
        </Box>
        {/* <Typography>{details.date}</Typography> */}
        <Box sx={{ width: "80%", alignItems: "center", margin: "auto" }}>
          <Divider />
          <Typography sx={{ m: 2, fontWeight: 200, fontFamily: "Gill Sans" }}>
            {details.description}
          </Typography>
          {/* <Typography sx={{ fontFamily: "Gill Sans" }}>
            Upcoming Sessions:
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
}
