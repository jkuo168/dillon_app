import react from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "../shared/Carousel";

export default function TodayClasses() {
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
      <Typography>Today's Classes</Typography>
      <Carousel classes={classes} />
    </Box>
  );
}
