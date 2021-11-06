import React from "react";
import { Box, Button } from "@mui/material";

export default function AppBar() {
  return (
    <Box style={{ alignItems: "center", height: "5em", display: "flex", backgroundColor: "#F78812" }} >
      <div style={{ display: "flex", alignItems: "center", paddingLeft: "1%", color: "white", fontFamily: "Gill Sans" }}>
          <img style={{width:"50px"}}src="https://i.ibb.co/rZdm6ZX/tiger.png" alt="tiger" border="0"/>
          <h1 style={{paddingLeft: "5px"}}>Tiger Fitness</h1>
      </div>
      <div style={{ flexGrow: "1", display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ color: "white", fontFamily: "Gill Sans" }} href="/">Home</Button>
        <Button style={{ color: "white", fontFamily: "Gill Sans" }} href="/calendar">Calendar</Button>
        <Button style={{ color: "white", fontFamily: "Gill Sans" }} href="/profile">Profile</Button>
      </div>
    </Box>
  );
}
