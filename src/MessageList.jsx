import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';
class  MessageList extends React.Component{
  constructor(props){
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
     
  }
 
  renderMessages(messages){
    return messages.map( (message, index) =>
        <div>
          { message.type === 'postMessage'
            ? (<Notification message = {message} /> )
            : (<Message key={index} message = {message}/>)
          }
        </div>
      );

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
