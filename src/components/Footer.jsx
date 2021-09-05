import React from "react";
import "./sass/Footer.scss";
import hapu_logo from "../assets/vectors/hapu_logo.svg";
import fb_logo from "../assets/vectors/facebook_logo.svg";
import itg_logo from "../assets/vectors/instagram_logo.svg";
import tw_logo from "../assets/vectors/twitter_logo.svg";
import calendar from "../assets/vectors/calendar_icon.svg";

function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <h1>Become a nanny share host</h1>
        <p>Takes less than 5 minutes to get started</p>
        <button type="button" className="btn-create">
          <img src={calendar} alt="calendar icon" />
          <div className="btn-text">
            <p className="text1">Create Your Nanny Share</p>
            <p className="text2">Takes less than 5 minutes</p>
          </div>
        </button>
        <a className="nannys-shared" href="/">
          Or browse local nanny-shares
        </a>
      </div>
      <div className="nav-footer">
        <div className="hapu">
          <img src={hapu_logo} alt="hapu name" />
        </div>
        <div className="nav-menu">
          <a href="/">Share your Nanny</a>
          <a href="/">Our Story</a>
          <a href="/">Blog</a>
          <a href="/">Terms &amp; Privacy</a>
        </div>
        <div className="social">
          <a href="https://www.fb.com" rel="noreferrer" target="_blank">
            <img src={fb_logo} alt="facebook logo" />
          </a>
          <a href="https://www.twitter.com" rel="noreferrer" target="blank">
            <img src={tw_logo} alt="twitter logo" />
          </a>
          <a href="https://www.instagram.com" rel="noreferrer" target="blank">
            <img src={itg_logo} alt="instagram logo" />
          </a>
        </div>
      </div>
      <hr className="divider" />
      <p className="copyrigth">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
