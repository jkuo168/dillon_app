import React from "react";
import { Box, Button } from "@mui/material";

export default function AppBar() {
  return (
    <Box
      style={{
        alignItems: "center",
        height: "5em",
        display: "flex",
        backgroundColor: "#FF8303",
        boxShadow:
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "1%",
          color: "white",
          fontFamily: "Gill Sans",
        }}
      >
        <img
          style={{ width: "50px" }}
          src="https://i.ibb.co/rZdm6ZX/tiger.png"
          alt="tiger"
          border="0"
        />
        <h1 style={{ paddingLeft: "12px" }}>Tiger Fitness</h1>
      </div>
      <div
        style={{
          flexGrow: "1",
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "12px",
        }}
      >
        <Button style={{ color: "white", fontFamily: "Gill Sans" }} href="/">
          Home
        </Button>
        <Button
          style={{ color: "white", fontFamily: "Gill Sans" }}
          href="/calendar"
        >
          Calendar
        </Button>
        <Button
          style={{ color: "white", fontFamily: "Gill Sans" }}
          href="/profile"
        >
          Profile
        </Button>
      </div>
    </Box>
  );
}
