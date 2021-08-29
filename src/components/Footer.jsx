import React from 'react';
import hapu_logo from '../assets/vectors/hapu_logo.svg';
import fb_logo from '../assets/vectors/facebook_logo.svg';
import itg_logo from '../assets/vectors/instagram_logo.svg';
import tw_logo from '../assets/vectors/twitter_logo.svg';
import calendar from '../assets/vectors/calendar_icon.svg';

function Footer() {
  return (
    <div>
      <h2>Become a nanny share host</h2>
      <p>Takes less than 5 minutes to get started</p>
      <div className="div-button">
        <img src={calendar} alt="icon calendar" />
        <div>
          <h5>Create Your Nanny Share</h5>
          <h6>Takes less than 5 minutes</h6>
        </div>
      </div>
      <div>
        <img src={hapu_logo} alt="" />
        <div>
          <a href="/">Share your Nanny</a>
          <a href="/">Our Story</a>
          <a href="/">Blog</a>
          <a href="/">Terms &amp; Privacy</a>
        </div>
        <div>
          <img src={fb_logo} alt="facebook logo" />
          <img src={tw_logo} alt="twitter logo" />
          <img src={itg_logo} alt="instagram logo" />
        </div>
      </div>
      <h6>Copyright © 2017 Hapu PTY Limited All rights reserved</h6>
    </div>
  )
}

export default Footer
