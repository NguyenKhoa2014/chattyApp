import React, { Component } from 'react';

const Notification = () => {
  return (
    <div >
      <div>  
        <div>
          <div className="message" >
            <span className="message-content">{this.props.message.content}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification;

