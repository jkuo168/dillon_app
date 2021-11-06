import React from "react";
import { Box } from "@mui/material";
import ClassCard from "./ClassCard";

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
      {classes.map((c) => {
        return <ClassCard class={c} />;
      })}
    </Box>
  );
}
