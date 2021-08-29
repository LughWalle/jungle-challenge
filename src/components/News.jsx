import React from 'react';
import ProfileImage from '../assets/images/ProfileImage.png'

function News() {
  return (
    <div className="news">
      <div>
        <img src={ProfileImage} alt="" />
        <p>
          <a href="/">Sarah’s day care available now in North Sydney</a>
          Wednesday, Thursday, Friday - 7:30 - 5:30
        </p>
      </div>
    </div>
  )
}

export default News
