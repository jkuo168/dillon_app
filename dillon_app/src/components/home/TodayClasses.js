import { Box, Typography } from "@mui/material";
import Carousel from "../shared/Carousel";
import axios from '../../axios';
import React, { useState, useEffect } from "react";

export default function TodayClasses() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
      async function getClasses() {
          const url = "/classes";

          const response = await axios.get(url).then((result) => { // get all class id's

            result.data.forEach(async (item) => { // for each class id, get the actual class
              console.log(item)
              const url2 = "/classes/info/"+ item._id;
              const response2 = await axios.get(url2).then((result2) => {
                console.log("ook")
                console.log(result2.data[0])
                const data = result2.data[0];
                setClasses(oldArr => [...oldArr, {
                  name: data.title,
                  time: data.date,
                  location: "Frist 212",
                  classId: data._id
                }])
              });
            });
          });         
          return response;
      }
      getClasses();

  }, [])

  return (
    <Box>
      <Typography>Today's Classes</Typography>
      <Carousel classes={classes} />
    </Box>
  );
}
