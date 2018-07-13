import React, {Component} from 'react';

class Header extends React.Component {
  constructor(props){
    super(props); 
  }
  render(){
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span><h3>{this.props.users  } users online</h3></span>
      </nav>
    )
  } 
}

export  {Header};