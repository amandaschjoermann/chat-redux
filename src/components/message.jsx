import React from 'react';

const Message = ( { message } ) => {
  return(
    <div className="message">
     <h3  className="author">{message.author.charAt(0).toUpperCase() + message.author.slice(1)} <span className="time">{message.created_at}</span></h3>
      <p className="content">{message.content.charAt(0).toUpperCase() + message.content.slice(1)}</p>
    </div>
  )
}

export default Message;
