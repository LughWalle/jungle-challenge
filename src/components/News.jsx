import React from "react";
import "./sass/News.scss";
import ProfileImage from "../assets/images/ProfileImage.png";

function News() {
  return (
    <div className="news">
      <img src={ProfileImage} alt="Sarah profile" />
      <div className="info-news">
        <a href="/">Sarah’s day care available now in North Sydney</a>
        <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
      </div>
    </div>
  );
}

export default News;
