import React from 'react'
import './Message.css';
function Message({message, timestamp, userImage, username}) {
    return (
      <div className="message">
        <img src={userImage} alt={username} />
        <div className="message__info">
          <h4>
            {username}{" "}
            <span className="message__timestamp">
              {timestamp?.toDate().toUTCString()}
            </span>{" "}
          </h4>
          <p>{message}</p>
        </div>
      </div>
    );
}

export default Message
