import React, {Component} from 'react';

class Header extends React.Component {
  render(){
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    )
  } 
}

export  {Header};