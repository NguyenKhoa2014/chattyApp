import React, {Component} from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
    console.log('header ',props);
  }
  render(){
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span>{this.props.users  }</span>
      </nav>
    )
  } 
}

export  {Header};