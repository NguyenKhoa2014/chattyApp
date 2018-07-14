import React, {Component} from 'react';
import MessageList from './MessageList.jsx';

import {ChatBar} from './ChatBar.jsx';
import {Header} from './Header.jsx';
require("../styles/application.scss");


class App extends Component {
  constructor(props){
    super(props);
    this.socket = new WebSocket("ws://localhost:3001",'protocolOne'); 
    this.state = {
      currentuser : {name:'Bob' },
      olduser: {},
      sessionsArray: [],
      user_id: '',
      users: 0,
      messages : []
    }
    this.newPost = this.newPost.bind(this);
  }
  componentDidMount() {
    this.socket.onopen =  (event) => { 
      //this.newPost('user', 'So and so has joined the channel', 'postNotification');
      //this.socket.send(JSON.stringify(this.message||''))
    };
    this.socket.onmessage = (event)   =>{
      var obj = JSON.parse(event.data);
      console.log('obj is onmessage', obj);
      var newSession = { 
         color  : obj.color,
         session_id : obj.session_id
      } 
      if (obj.type === 'usersOnline' ){
        this.setState({
          users: obj.usersOnline,
          sessionsArray : [...this.state.sessionsArray, newSession]
        });
        console.log('after set state ', this.state.sessionsArray)  
      }      

      if (obj.type === "incomingMessage"){
        this.setState({
          messages : [...this.state.messages, {username: obj['username'],
            content: obj['content'], id: obj['id']}]
        })
      } else {
        this.setState({
          messages: [...this.state.messages, {
            username: obj['username'],
            content: obj['content'], id: obj['id'],
            Notification: 'postNotification'
          }]
        })
      }
    }
     
  }

  newPost(username, content, type) {
    const message = {
      username,
      type,
      content
    };
    this.socket.send(JSON.stringify(message));
  }

  render() { 
    return (
      <div>
        <Header users = {this.state.users}/>
        <MessageList
          sessionsArray = {this.state.sessionsArray} 
          messages={this.state.messages } 
        />
        <ChatBar 
          currentuser= {this.state.currentuser } 
          newPost = {this.newPost} 
        /> 
    </div>
    );
  }
}
export default App;
