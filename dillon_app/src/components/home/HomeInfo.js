import react from "react";
import { Box } from "@mui/material";
import MyClasses from "./MyClasses";
import TodayClasses from "./TodayClasses";
import Categories from "./Categories";

export default function HomeInfo() {
  return (
    <Box>
      <MyClasses />
      <TodayClasses />
      <Categories />
    </Box>
  );
}
