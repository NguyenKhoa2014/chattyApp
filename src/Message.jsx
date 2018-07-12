import React, { Component } from 'react';
class Message extends React.Component {
  constructor(props){
    super(props);
    //console.log('in Message class, props.message.username is: ',props.message.username) 
    this.createmessage = this.createmessage.bind(this);
  }
  createmessage(props){
    return (
    <div>
      <div className="message" >
            <span className="message-username">{this.props.message.username }</span>
            <span className="message-content">{this.props.message.content ? this.props.message.content: ''}</span>
      </div>
    </div>
    )
  }
  render(){
    return (
      <div >
        <div>  {this.createmessage(this.props.message)} </div>
        <div className="message system">
            {this.props.message.username} changed their name to nomnom.
        </div>
      </div>
    )
  }
}

export  default Message;

