import React, {Component} from 'react';
import MessageList from './MessageList.jsx';

import {ChatBar} from './ChatBar.jsx';
import {Header} from './Header.jsx';
require("../styles/application.scss");

// const client = new WebSocket("ws://localhost:3001",'protocolOne');
// const handleNewMessage = (event) =>{
//   console.log()
// }

class App extends Component {
  constructor(props){
    super(props);
    this.socket = new WebSocket("ws://localhost:3001",'protocolOne');
    this.message = { } ;
    this.state = {
      currentuser : {name:'Bob' },
      messages : []
    }
    this.newPost = this.newPost.bind(this);
  }
  componentDidMount() {
    this.socket.onopen =  (event) => { 
      this.socket.send(JSON.stringify(this.message||''))
    };
    this.socket.onmessage = (event)   =>{
      //console.log('server data content: ',typeof event.data );
      var obj = JSON.parse(event.data);
      //console.log('obj is ',obj);
      this.setState({
        messages : [...this.state.messages, {username: obj['username'],
          content: obj['content'], id: obj['id']}]
      })
    }

    
  }

  newPost(username, content, messagetype) {
    if(this.state.currentuser.name !== username){
      let obj = {
        content: this.state.currentuser.name + ' name change ' + username,
        type: 'postNotification'
      } 
      console.log('obj is ', JSON.stringify(obj));
      this.socket.send(JSON.stringify(obj));
      console.log('changed sent')
    }
    this.message['username'] = username;
    this.message.content = content;
    this.message.type = messagetype
    this.socket.send(JSON.stringify(this.message));
  }
  render() {
    const messages=[{username:'khoa', content:'test'}];
    return (
      <div>
        <Header currentuser = {this.state.currentuser }/>
        <MessageList messages={this.state.messages } currentuser = {this.state.currentuser }/>
        <ChatBar currentuser= {this.state.currentuser } newPost = {this.newPost} socket = {this.socket}/> 
      </div>
       
    );
  }
}
export default App;
