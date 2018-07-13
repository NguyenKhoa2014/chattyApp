import React, { Component } from 'react';
class Message extends React.Component {
  constructor(props){
    super(props); 
    this.createmessage = this.createmessage.bind(this);
  }
  findColor(){
    
  }
  createmessage(props){
    return (
    <div>
      <div className="message" >
            <span style ={{color: this.props.color}} className="message-username">{this.props.message.username }</span>
            <span className="message-content">{this.props.message.content ? this.props.message.content: ''}</span>
      </div>
    </div>
    )
  }
  render(){
    return (
      <div >
        <div>  {this.createmessage(this.props.message)} </div>
      </div>
    )
  }
}

export  default Message;

