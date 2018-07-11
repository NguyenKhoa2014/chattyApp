import React, {Component} from 'react';
import Message from './Message.jsx'
class  MessageList extends React.Component{
  constructor(props){
    super(props);
     
    // this.createmessage = this.createmessage.bind(this);
  }
  
  renderMessages(messages){
    // const messages = props.messages;
    return messages.map( (message, index) => {
      //console.log('message in map',message.username, message.content);
      return (
        <Message key={index} message = {message} />
      )
    })

  }
  render(){
    return (
      <div>
        <main className="message" >
             {this.renderMessages(this.props.messages)}
        </main>
      </div>
    )
  } 
}
export default MessageList;
