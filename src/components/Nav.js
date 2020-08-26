import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import Login from './Login';

function Nav() {

const navStyle = {
    color : "white"
}

  return (
    <nav>
      <h3>Document Uploader</h3>
      <ul className="nav-links">
        <Link style={navStyle} to='/'><li>Home</li></Link>
        <Link style={navStyle} to='/about'><li>About us</li></Link>
        <Link style={navStyle} to='/contact'><li>Contact Us</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;