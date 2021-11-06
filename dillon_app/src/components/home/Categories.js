import { Box, Typography } from "@mui/material";
import Carousel from "../shared/Carousel";
import axios from '../../axios';
import React, { useState, useEffect } from "react";


export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      async function getCategories() {
          const url = "/classes/categories";

          await axios.get(url).then((result) => { // get all category id's
            console.log(result)
            result.data.forEach(async (item) => { // for each category id, get the actual class
                setCategories(oldArr => [...oldArr, {
                  name: item.name,
                  id: item.categoryId,
                  image: item.image
                }])
          });         
        })
      }
      getCategories();

  }, [])
  return (
    <Box>
      <Typography style={{fontFamily: "Gill Sans" , fontSize:"2em"}}>Categories</Typography>
      <Carousel classes={categories} isClass={false} />
    </Box>
  );
}
