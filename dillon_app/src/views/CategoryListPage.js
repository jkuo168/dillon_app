import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { Box, Typography } from "@material-ui/core";
import ClassCard from "../components/shared/ClassCard";

export default function CategoryListPage(props) {

  const { categoryName, id } = useParams()
  const [classes, setClasses] = useState([]);
  console.log("ID")
  console.log(categoryName)
  useEffect(() => {
      async function getClasses() {
          const url = "/classes/categories/"+ id;
          console.log(id)

          const response = await axios.get(url).then((result) => { // get all classes in category
            result.data.forEach((item) => {
                console.log(item)
                setClasses(oldArr => [...oldArr, {  
                 name: item.title,
                  time: item.date,
                  location: "Frist 212", 
                  classId: item._id,
                  image: item.image
                }])
            });   
          });         
          return response;
      }
      getClasses();

  }, [id])

  return (
    <div style={{display: "flex", justifyContent:"center"}}>
      <Box>
        <Typography style={{fontFamily: "Gill Sans", fontSize:"2em" }}>{categoryName} Classes</Typography>
          {classes.map((c) => {
            return <ClassCard class={c} />;
          })}
      </Box>
    </div>
  );
}
