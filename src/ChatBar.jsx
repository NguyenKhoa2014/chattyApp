import React from 'react';
class ChatBar extends React.Component{
   constructor(props){
       super(props);
      // console.log('chatbar props ', props)
       this.state ={
           content: '',
           username : '',
           oldusername:'Bob',
           type: '' 
       }
    //    this.onContentChange = this.onContentChange.bind(this);
    //    this.onUserNameChange = this.onUserNameChange.bind(this);
       this.handleKeyPressContent = this.handleKeyPressContent.bind(this);
       this.handleBlurUserName = this.handleBlurUserName.bind(this);
        
   }
//    onContentChange(event) {
       
//        this.setState({content : event.target.value});
//       // console.log('content ', event.target.value)
//    }
//    onUserNameChange(event) {
        
//         this.setState({username: event.target.value});
//    }
  
   componentDidMount() {
       this.setState({username: this.refs.username.value})
   }

   handleKeyPressContent(event){
     if (event.key === 'Enter'){
       const messageType = 'postMessage'
       this.props.newPost(this.state.username, this.refs.content.value, messageType);
     }
   }

   // add event handlers for the individual input fields
   // create a handleUserName function that will send a message to the server
   // create a notification component and conditional render your notification component within your message list if the message type is notification

   handleBlurUserName(event){
      if (this.state.username !== event.target.value) {
        const content = this.state.username + ' change name to ' + event.target.value;
        const messageType = 'postNotification'
        this.setState({username: event.target.value})
        this.props.newPost(this.state.username, content, messageType);
      }
  }

   render () { return (
       <footer className="chatbar">
         <input
           ref = 'username' 
           className="chatbar-username" 
           
           placeholder={this.props.currentuser.name}
           onBlur = {this.handleBlurUserName} 
           defaultValue={this.props.currentuser.name}
           />
         <input className="chatbar-message" 
           ref = 'content'
           
           onKeyPress = {this.handleKeyPressContent} 
           placeholder="Type a message and hit ENTER" 
           />
       </footer>
     )}

}
export {ChatBar}