import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import db from "./firebase";
import Message from "./Message";
import ChatInput from './ChatInput';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState('');
  const [roomMessages, setRoomMessages] = useState([]);
  //console.log(roomDetails);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms").doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(
          snapshot.docs.map((doc) => {
            return doc.data();
          }),
        )
      );
  }, [roomId]);
  //console.log("messages >>>>>>" + roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoIcon /> Detail
          </p>
        </div>
      </div>
      <div className="chat__message">
        {roomMessages.map((message) => {
          return <Message {...message} />;
        })}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />    </div>
  );
}

export default Chat;
