import { Box, Typography } from "@material-ui/core";
import Carousel from "../shared/Carousel";
import axios from '../../axios';
import React, { useState, useEffect } from "react";

export default function MyClasses() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
      async function getClasses() {
          const url = "/users/"+ "61864f7529827fe462796a20";

          const response = await axios.get(url).then((result) => { // get all class id's user is in
            console.log("DEBUG")
            console.log(result.data)
            result.data.forEach(async (item) => { // for each class id, get the actual class
              console.log(item)
              const url2 = "/classes/info/"+ item;
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
      <Typography style={{fontFamily: "Gill Sans", fontSize:"2em" }}>My Classes</Typography>
      <Carousel classes={classes} isClass={true}/>
    </Box>
  );
}
