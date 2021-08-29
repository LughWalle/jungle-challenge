import React from 'react';
import Header from './Header';
import play_icon from '../assets/vectors/play_icon.svg';
import imageHeader from '../assets/images/ImageHeader.png';

function Hero() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
          <div>
            <img src={play_icon} alt="" />
            <p>See hapu in action (27 seconds)</p>
          </div>
        </div>
        <img src={imageHeader} alt="" />
      </div>
    </div>
  )
}

export default Hero
