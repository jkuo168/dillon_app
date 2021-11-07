import React, { useState } from "react";
import {
  Box,
  Typography,
  Backdrop,
  TextField,
  Card,
  Button,
} from "@mui/material";

export default function AddCourseForm(props) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    // TO DO AXIOS CALL

    setName("");
    setTitle("");
    setDescription("");
    setDate("");
    setImage("");
    props.setFormOpen(!props.formOpen);
  };

  const handleCancel = () => {
    props.setFormOpen(!props.formOpen);
  };

  return (
    <Box>
      <Backdrop sx={{ color: "#fff", p: 4 }} open={props.formOpen}>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            overflow: "auto",
            borderRadius: 4,
          }}
        >
          <Card sx={{ p: 2, borderRadius: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Add a Course
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                sx={{ m: 2 }}
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
              <TextField
                sx={{ m: 2 }}
                label="Course Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>
              <TextField
                sx={{ m: 2 }}
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
              ></TextField>
              <TextField
                sx={{ m: 2 }}
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></TextField>
              <TextField
                sx={{ m: 2 }}
                label="Image Link"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></TextField>
              <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ width: "20%" }}
                  onClick={() => handleCancel()}
                >
                  Cancel
                </Button>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Button
                  variant="outlined"
                  sx={{ width: "20%" }}
                  onClick={() => handleAdd()}
                >
                  Add
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </Backdrop>
    </Box>
  );
}
