import { BasicButton, YoutubeEian1, YoutubeEian2, YoutubeEian3 } from "../App";
import React, { Component } from "react";
import "./../App.css";
import { Carousel } from "../Components/Carousel/Carousel.jsx";

const Button3 = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/skAmLoapFaE?si=jh23hrn2ZKVvat45",
    "https://www.youtube.com/embed/kKcA-ocLhN4?si=KnGMxdH9KADycI1d",
    "https://www.youtube.com/embed/jPKaiJjR7ts?si=q-ruexBNPOfs7Th6",
  ];

  const containerStyles = {
    maxWidth: "500px",
    height: "280px",
    margin: "0 auto",
  };

  const slides = videoUrls.map((url, index) => (
    <iframe
      key={index}
      width="560"
      height="315"
      src={url}
      title={`YouTube video ${index + 1}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ));

  return (
    <>
      <h1>Music by Eian</h1>
      <div style={containerStyles}>
        <Carousel slides={slides} />
      </div>
    </>
  );
};

export default Button3;
