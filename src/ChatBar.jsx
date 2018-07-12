import React from 'react';
class ChatBar extends React.Component{
   constructor(props){
       super(props);
       console.log('chatbar props ', props)
       this.state ={
           content: '',
           username : 'Bob',
           oldusername:'Bob',
           type: '' 
       }
       this.onContentChange = this.onContentChange.bind(this);
       this.onUserNameChange = this.onUserNameChange.bind(this);
       this.handleKeyPress = this.handleKeyPress.bind(this)
        
   }
   onContentChange(event) {
       
       this.setState({content : event.target.value});
       console.log('content ', event.target.value)
   }
   onUserNameChange(event) {
        
        this.setState({username: event.target.value})
        
 
        
       //console.log('username ', event.target.value);
   }
  
   handleKeyPress(event){
      
     if (event.key === 'Enter'){
        //console.log('in handlekeypress props: ', this.props)
       const messageType = 'postMessage'
       console.log('handlekeypres this.state.username ', this.state.username)
       this.props.newPost(this.state.username, this.state.content, messageType);
    //    this.props.socket.onopen( (event) => {
    //      if(this.oldusername !== this.username){
    //        let obj = {
    //          "type": "postNotification", 
    //          "content": this.oldusername + " has changed their name to " + this.username}
    //          socket.send(JSON.stringify(obj))
    //         }
    //      socket.send(this.state.content);
    //     });
     }
      
   }

   render () { return (
       <footer className="chatbar">
         <input className="chatbar-username" onChange={this.onUserNameChange} placeholder={this.props.currentuser.name} defaultValue={this.props.currentuser.name}/>
         <input className="chatbar-message" 
           onChange={this.onContentChange}
           onKeyPress = {this.handleKeyPress} 
           placeholder="Type a message and hit ENTER" 
           value={this.state.content} />
       </footer>
     )}

}
export {ChatBar}