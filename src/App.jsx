import React, {Component} from 'react';
import MessageList from './MessageList.jsx';

import {ChatBar} from './ChatBar.jsx';
import {Header} from './Header.jsx';
require("../styles/application.scss");

class App extends Component {
  constructor(props){
    super(props);
    this.socket = new WebSocket("ws://localhost:3001",'protocolOne');
    this.message = { } ;
    this.state = {
      currentuser : {name:'anonymous' },
      
      messages : [
        {
          username:'bob',
          content:'test'
        }
    ]
    }
    this.newPost = this.newPost.bind(this);
  }
  componentDidMount() {
    // console.log("componentDidMount <App />");
    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);
    // console.log('component didmount');
     
      //this.socket.onopen =  (event) => {
       // this.socket.send("user: " + this.message.username + " says: " + this.message.content);
       this.socket.onopen =  (event) => { 
       this.socket.send(JSON.stringify(this.message))
    };

    
  }
  newPost(username, content) {
    console.log('content is', content);
    this.message.username = username;
    this.message.content = content;
    this.setState({
       
      messages : [...this.state.messages, {username: username,
        content: content}]
    })

 
  }
  render() {
    const messages=[{username:'khoa', content:'test'}];
    return (
      <div>
        <Header currentuser = {this.state.currentuser}/>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentuser= {this.state.currentuser} newPost = {this.newPost} socket = {this.socket}/> 
      </div>
       
    );
  }
}
export default App;
