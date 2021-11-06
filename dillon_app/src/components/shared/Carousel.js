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
        justifyContent: "flex-start",
        width: "100%",
        overflow: "auto",
      }}
    >
      {props.isClass && classes.map((c) => {
        return <ClassCard class={c} />;
      })}
      {!props.isClass && classes.map((c) => {
        return <CategoryCard category={c} />;
      })}
    </Box>
  );
}
