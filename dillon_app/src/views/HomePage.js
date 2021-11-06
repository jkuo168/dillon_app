import React from "react";
import { Box } from "@mui/material";
import AppBar from "../components/AppBar";
import HomeInfo from "../components/home/HomeInfo";

export default function HomePage() {
  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ textAlign: "right" }}>
        <AppBar />
      </Box>
      <Box sx={{ m: 3 }}>
        <HomeInfo />
      </Box>
    </Box>
  );
}
