import React from 'react';
import './sass/Footer.scss';
import hapu_logo from '../assets/vectors/hapu_logo.svg';
import fb_logo from '../assets/vectors/facebook_logo.svg';
import itg_logo from '../assets/vectors/instagram_logo.svg';
import tw_logo from '../assets/vectors/twitter_logo.svg';
import calendar from '../assets/vectors/calendar_icon.svg';

function Footer() {
  return (
    <div className="footer">
      <h1>Become a nanny share host</h1>
      <p>Takes less than 5 minutes to get started</p>
      <button type="button" className="btn-create">
        <img src={calendar} alt="icon calendar" />
        <div>
          <p>Create Your Nanny Share</p>
          <p>Takes less than 5 minutes</p>
        </div>
      </button>
      <a className="nannys-shared" href="/">Or browse local nanny-shares</a>
      <div className="nav-footer">
        <img className="hapu" src={hapu_logo} alt="name hapu" />
        <div className="nav-menu">
          <a href="/">Share your Nanny</a>
          <a href="/">Our Story</a>
          <a href="/">Blog</a>
          <a href="/">Terms &amp; Privacy</a>
        </div>
        <div className="social">
          <img src={fb_logo} alt="facebook logo" />
          <img src={tw_logo} alt="twitter logo" />
          <img src={itg_logo} alt="instagram logo" />
        </div>
      </div>
      <p className="copyrigth">Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </div>
  )
}

export default Footer
