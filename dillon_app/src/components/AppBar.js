import React from "react";
import { Box, Button } from "@mui/material";

export default function AppBar() {
  return (
    <Box>
      <Button href="/">Home</Button>
      <Button href="/calendar">Calendar</Button>
      <Button href="/profile">Profile</Button>
    </Box>
  );
}
