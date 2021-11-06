import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { Box, Typography } from "@material-ui/core";

export default function ClassInfo(props) {

  const { id } = useParams()
  const [details, setDetails] = useState({});
  console.log("ID")
  console.log(id)
  useEffect(() => {
      async function getClasses() {
          const url = "/classes/info/"+ id;
          console.log(id)

          const response = await axios.get(url).then((result) => { // get all class id's user is in
            console.log(result.data[0])
            setDetails(result.data[0])
          });         
          return response;
      }
      getClasses();

  }, [id])

  return (
    <Box>
      <Typography>Class Details</Typography>
      {details.title}
      {details.description}
      {details.instructor}
      {details.date}
    </Box>
  );
}
