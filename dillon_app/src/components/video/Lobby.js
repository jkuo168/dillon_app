import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "../../axios";
import { Box, Typography, TextField, Button } from "@mui/material";
import AppBar from "../shared/AppBar";

const Lobby = ({
  username,
  password,
  isCorrectPassword,
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit,
  connecting,
  id,
}) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    // async function getDebateDetails(){
    //   const url = '/v2/debates/'+id;
    //   const response = await axios.get(url);
    //   setTitle(response.data[0].title)
    //   return response;
    // }
    // getDebateDetails()
  }, []);

  return (
    <Box>
      <AppBar />
      <Box sx={{ textAlign: "center", m: 10 }}>
        <Typography variant="h3" sx={{ fontFamily: "Gill Sans", mb: 3 }}>
          Enter Room
        </Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            value={username}
            placeholder={"First Last"}
            onChange={handleUsernameChange}
            readOnly={isCorrectPassword && connecting}
            required
            sx={{
              m: 5,
              "& label.Mui-focused": {
                color: "#F78812",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#F78812",
                },
              },
            }}
          />
          <TextField
            label="Room Password"
            type="password"
            value={password}
            placeholder={"Password"}
            onChange={handlePasswordChange}
            readOnly={isCorrectPassword && connecting}
            required
            sx={{
              m: 5,
              "& label.Mui-focused": {
                color: "#F78812",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#F78812",
                },
              },
            }}
          />
          <Box sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              type="submit"
              disabled={isCorrectPassword && connecting}
              sx={{
                width: "20%",
                color: "#F78812",
                borderColor: "#F78812",
                "&:hover": { borderColor: "#F78812" },
              }}
            >
              {isCorrectPassword && connecting ? "Connecting" : "Join"}
            </Button>
          </Box>
          {!isCorrectPassword && (
            <Form.Group as={Row}>
              <Form.Label htmlFor="room" column sm={4}>
                Wrong Password
              </Form.Label>
            </Form.Group>
          )}
        </Form>
      </Box>
      {/* <div
        style={{
          color: "black",
          width: "75%",
          margin: "auto",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <h2 style={{ color: "#F78812", marginTop: "2%", fontSize: "3rem" }}>
            Enter Room: {title}
          </h2>
          <Form.Group as={Row}>
            <Form.Label htmlFor="name" column sm={4}>
              Name:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                value={username}
                placeholder={"First Last"}
                onChange={handleUsernameChange}
                readOnly={isCorrectPassword && connecting}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label htmlFor="room" column sm={4}>
              Room Password:
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="password"
                value={password}
                placeholder={"password"}
                onChange={handlePasswordChange}
                readOnly={isCorrectPassword && connecting}
                required
              />
            </Col>
          </Form.Group>
          <button type="submit" disabled={isCorrectPassword && connecting}>
            {isCorrectPassword && connecting ? "Connecting" : "Join"}
          </button>
          {!isCorrectPassword && (
            <Form.Group as={Row}>
              <Form.Label htmlFor="room" column sm={4}>
                Wrong Password
              </Form.Label>
            </Form.Group>
          )}
        </Form>
      </div> */}
    </Box>
  );
};

export default Lobby;
