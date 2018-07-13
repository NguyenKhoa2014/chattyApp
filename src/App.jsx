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
      users: 0,
      messages : []
    }
    this.newPost = this.newPost.bind(this);
  }
  componentDidMount() {
    this.socket.onopen =  (event) => { 
      //this.socket.send(JSON.stringify(this.message||''))
    };
    this.socket.onmessage = (event)   =>{
      var obj = JSON.parse(event.data);
      if (obj.type === 'usersOnline' ){
        this.setState({users: obj.usersOnline}); 
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
        <MessageList messages={this.state.messages } currentuser = {this.state.currentuser } olduser = {this.state.olduser}/>
        <ChatBar currentuser= {this.state.currentuser } newPost = {this.newPost} /> 
      </div>
       
    );
  }
}
export default App;
