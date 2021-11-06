import React from "react";
import { Box } from "@mui/material";
import AppBar from "../components/shared/AppBar";
import HomeInfo from "../components/home/HomeInfo";

export default function HomePage() {
  return (
    <Box>
      <Box sx={{ textAlign: "right" }}>
        <AppBar />
      </Box>
      <Box sx={{ m: 3 }}>
        <HomeInfo />
      </Box>
    </Box>
  );
}
