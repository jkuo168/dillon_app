import React from "react";
import { Box } from "@mui/material";
import ClassCard from "./ClassCard";
import CategoryCard from "./CategoryCard";

export default function Carousel(props) {
  const classes = props.classes;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        overflow: "auto",
      }}
    >
      {props.isClass &&
        classes.map((c, index) => {
          return <ClassCard class={c} key={index + c} />;
        })}
      {!props.isClass &&
        classes.map((c, index) => {
          return <CategoryCard category={c} key={index + c} />;
        })}
    </Box>
  );
}
