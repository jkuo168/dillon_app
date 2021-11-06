import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { Box, Typography, Grid } from "@mui/material";
import ClassCard from "../components/shared/ClassCard";
import AppBar from "../components/shared/AppBar";

export default function CategoryListPage(props) {
  const { categoryName, id } = useParams();
  const [classes, setClasses] = useState([]);
  console.log("ID");
  console.log(categoryName);
  useEffect(() => {
    async function getClasses() {
      const url = "/classes/categories/" + id;
      console.log(id);

      const response = await axios.get(url).then((result) => {
        // get all classes in category
        result.data.forEach((item) => {
          console.log(item);
          setClasses((oldArr) => [
            ...oldArr,
            {
              name: item.title,
              time: item.date,
              location: "Frist 212",
              classId: item._id,
              image: item.image,
            },
          ]);
        });
      });
      return response;
    }
    getClasses();
  }, [id]);

  return (
    <Box>
      <AppBar />
      <Box sx={{ width: "70%", margin: "auto", textAlign: "center" }}>
        <Typography sx={{ fontFamily: "Gill Sans", fontSize: "2em", m: 4 }}>
          {categoryName} Classes
        </Typography>
        <Grid container spacing={2}>
          {classes.map((c) => {
            return (
              <Grid item xs={4}>
                <ClassCard class={c} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
