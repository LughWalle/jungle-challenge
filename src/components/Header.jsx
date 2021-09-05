import React from 'react';
import badge from '../assets/vectors/badge.svg';
import './sass/Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="nav-header">
        <img src={badge} className="logo" alt="logo" />
        <nav className="nav-menu">
          <a href="/">Create Your Nanny Share</a>
          <a href="/">Browse Shares</a>
          <a href="/">Our Story</a>
        </nav>
      </div>
      <div className="signin">
        <button className="btn">Become a Nanny Share Host</button>
        <a href="/">Sign In</a>
      </div>
    </div>
  )
}

export default Header
