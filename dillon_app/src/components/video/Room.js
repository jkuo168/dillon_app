import React, { useEffect, useState } from "react";
import Participant from "./Participant";

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
    <div style={{position: "relative"}}>
      <h2 style={{fontFamily: "Gill Sans", color: "#F78812"}}>Dillon Virtual Gym</h2>
      <button style={{position: "absolute",
  top: "0",
  right: "20px"}} onClick={handleLogout}>Log out</button>
      <div style={{textAlign: "center",
  marginBottom: "2em"}}>
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ""
        )}
      </div>
      <div style={{display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  padding: "0 2em 2em"}}>{remoteParticipants}</div>
    </div>
  );
};

export default Room;