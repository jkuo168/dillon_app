import axios from "../axios";
import React, { useState, useEffect } from "react";
import { Box, Typography, Card, Grid, Fab, Backdrop } from "@mui/material";
import AppBar from "../components/shared/AppBar";
import ClassCard from "../components/shared/ClassCard";
import AddIcon from "@mui/icons-material/Add";
import AddCourseForm from "../components/profile/Form";

export default function ProfilePage() {
  const [classes, setClasses] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const handleForm = () => {
    console.log("here");
    setFormOpen(true);
  };

  useEffect(() => {
    async function getClasses() {
      const url = "/users/" + "61864f7529827fe462796a20";

      const response = await axios.get(url).then((result) => {
        // get all class id's user is in
        console.log(result.data);
        result.data.forEach(async (item) => {
          // for each class id, get the actual class
          console.log(item);
          const url2 = "/classes/info/" + item;
          const response2 = await axios.get(url2).then((result2) => {
            console.log("ook");
            console.log(result2.data[0]);
            const data = result2.data[0];
            setClasses((oldArr) => [
              ...oldArr,
              {
                name: data.title,
                time: data.date,
                location: "Frist 212",
                classId: data._id,
                image: data.image,
              },
            ]);
          });
        });
      });
      return response;
    }
    getClasses();
  }, []);

  return (
    <Box>
      <AppBar />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          mt: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ borderRadius: "50%", width: "15vw", height: "15vw" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://president.princeton.edu/sites/president/files/styles/pwds_media_large_no_crop/public/media/indoor-crop.jpg?itok=oK7GlOXV"
          ></img>
        </Card>
        <Box sx={{ ml: 5 }}>
          <Typography variant="h4" sx={{ fontFamily: "Gill Sans" }}>
            Christopher Eisgruber
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: "Gill Sans" }}>
            Administrator
          </Typography>
          <Typography sx={{ fontFamily: "Gill Sans" }}>
            Classes Taken: 5
          </Typography>
          <Typography sx={{ fontFamily: "Gill Sans" }}>
            Classes Taught: 10
          </Typography>
          <Typography sx={{ fontFamily: "Gill Sans" }}>
            Diamond League
          </Typography>
        </Box>
      </Box>
      <Box sx={{ m: 5 }}>
        <Typography sx={{ fontFamily: "Gill Sans", fontSize: "2em", mb: 2 }}>
          My Classes ({classes.length != 0 ? classes.length : ""})
        </Typography>
        <Box>
          <Grid container spacing={2}>
            {classes.map((c) => {
              return (
                <Grid sx={{ margin: classes.length < 4 ? "" : "auto" }}>
                  <ClassCard class={c} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: "2%",
          right: "2%",
          backgroundColor: "#F78812",
          "&:hover": { backgroundColor: "#F78812", opacity: "90%" },
        }}
        onClick={() => {
          handleForm();
        }}
      >
        <AddIcon />
      </Fab>
      <AddCourseForm setFormOpen={setFormOpen} formOpen={formOpen} />
    </Box>
  );
}
