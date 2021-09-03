import React from 'react';
import badge from '../assets/vectors/badge.svg';
import './sass/Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="nav-header">
        <img src={badge} className="logo" alt="logo" />
        <nav className="nav-menu">
          <a className="link-nav" href="/">Create Your Nanny Share</a>
          <a className="link-nav" href="/">Browse Shares</a>
          <a className="link-nav" href="/">Our Story</a>
        </nav>
      </div>
      <div className="signin">
        <button className="btn">Become a Nanny Share Host</button>
        <a className="link-nav" href="/">Sign In</a>
      </div>
    </div>
  )
}

export default Header
