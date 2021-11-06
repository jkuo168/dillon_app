import React from "react";
import { Box } from "@mui/material";
import MyClasses from "./MyClasses";
import TodayClasses from "./TodayClasses";
import Categories from "./Categories";

export default function HomeInfo() {
  return (
    <Box sx={{ padding: "1%" }}>
      <MyClasses />
      <TodayClasses />
      <Categories />
    </Box>
  );
}
