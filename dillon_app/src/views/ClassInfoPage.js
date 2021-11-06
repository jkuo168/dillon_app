import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { Box, Typography, Card, Divider } from "@mui/material";

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
      <Box sx={{ position: "relative", textAlign: "center", color: "white" }}>
        <img
          style={{ width: "100%", height: "50vh" }}
          src={details.image}
        ></img>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h1">{details.title}</Typography>
          <Typography variant="h5">{details.instructor}</Typography>
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
            <Typography variant="h6" sx={{ textAlign: "center", mb: 5 }}>
              60 MIN
            </Typography>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          mt: 7,
          position: "absolute",
          width: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography>{details.date}</Typography>
        <Divider />
        <Typography>{details.description}</Typography>
      </Box>
    </Box>
  );
}
