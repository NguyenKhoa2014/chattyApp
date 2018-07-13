import React, { Component } from 'react';
class Message extends React.Component {
  constructor(props){
    super(props);
    console.log('props, props.message : ',props) 
    this.createmessage = this.createmessage.bind(this);
  }
  // renderNotification(notification){
  //   if(this.props.message.Notification){
  //     return ( 
  //       <div className="message system">
  //       User {this.props.message.olduser} changed name to {this.props.message.username}
  //        </div>
  //     )
  //   }
  // }
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
      </div>
    )
  }
}

export  default Message;

