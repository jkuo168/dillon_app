import { Box, Typography } from "@material-ui/core";
import Carousel from "../shared/Carousel";
import react from "react";

export default function MyClasses() {
  const classes = [
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
    { name: "Yoga", time: "1:00-2:00", location: "Frist 212", classId: "123" },
  ];

  return (
    <Box>
      <Typography>My Classes</Typography>
      <Carousel classes={classes} />
    </Box>
  );
}
