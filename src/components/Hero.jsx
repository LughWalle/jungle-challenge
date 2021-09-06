import React from 'react';
import Header from './Header';
import './sass/Hero.scss';
import play_icon from '../assets/vectors/play_icon.svg';
import imageHeader from '../assets/images/ImageHeader.png';

function Hero() {
  const getAB = +localStorage.getItem('AB');
  
  const ABCheck = () => {
    if (!getAB) {
      const ABValue = Math.floor(Math.random() * 2);
      localStorage.setItem('AB', ABValue);
    }
  }

  ABCheck();

  return (
    <div className="hero">
      <Header />
      <div className="hero-section">
        <article>
          
          <h1>
            {getAB
            ? 'Easily create or join a local nanny share with Hapu'
            : 'Create the childcare you need at a price you can afford'}
          </h1>
          <p>
            {getAB
            ? 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.'
            : 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.'}
          </p>
          <div>
            <button type="button" className="play-btn">
              <img src={play_icon} alt="play button" />
            </button>
            <a href="/">See hapu in action (27 seconds)</a>
          </div>
        </article>
        <img src={imageHeader} className="img-hero" alt="conection example" />
      </div>
    </div>
  );
}

export default Hero;
