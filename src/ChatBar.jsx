import React from 'react';
class ChatBar extends React.Component{
   constructor(props){
       super(props);
       
       this.state ={
           content: '',
           username : ''

       }
       this.onContentChange = this.onContentChange.bind(this);
       this.onUserNameChange = this.onUserNameChange.bind(this);
       this.handleKeyPress = this.handleKeyPress.bind(this)
        
   }
   onContentChange(event) {
      
       this.setState({content : event.target.value})
   }
   onUserNameChange(event) {
       this.setState({username : event.target.value})
   }
  
   handleKeyPress(event){
      
     if (event.key === 'Enter'){
        console.log('in handlekeypress props: ', this.props)
        this.props.newPost(this.state.username, this.state.content);
        this.props.socket.onopen( (event) => {
            socket.send(this.state.content);
         });
     }
   }

   render () { return (
       <footer className="chatbar">
         <input className="chatbar-username" onChange={this.onUserNameChange} placeholder="Your Name (Optional)" value = {this.state.username} />
         <input className="chatbar-message" 
           onChange={this.onContentChange}
           onKeyPress = {this.handleKeyPress} 
           placeholder="Type a message and hit ENTER" 
           value={this.state.content} />
       </footer>
     )}

}
export {ChatBar}