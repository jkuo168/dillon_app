import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Participant from "./Participant";
import AppBar from "../shared/AppBar";
import { Typography } from "@mui/material";

const Room = ({ roomName, room, handleLogout }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <Box sx={{ textAlign: "center" }}>
      <AppBar />
      <Typography
        variant="h4"
        sx={{ mt: 3, mb: 2, fontFamily: "Gill Sans", textAlign: "center" }}
      >
        Dillon Virtual Gym
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {room ? (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
            />
          ) : (
            ""
          )}
        </Box>
        <Box sx={{ m: 2, flex: "1 1 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              overflow: "auto",
            }}
          >
            {remoteParticipants}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Room;
