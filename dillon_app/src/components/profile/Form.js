import React from "react";
import { Box, FormGroup, Backdrop } from "@mui/material";

export default function AddCourseForm(props) {
  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.formOpen}
        onClick={() => props.setFormOpen(!props.formOpen)}
      >
        Hello
        <FormGroup />
      </Backdrop>
    </Box>
  );
}
