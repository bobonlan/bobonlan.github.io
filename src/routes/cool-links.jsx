import { BasicButton, YoutubeEian1, YoutubeEian2, YoutubeEian3 } from "../App";
import React, { Component } from "react";
import Slider from "react-slick"
import "./../App.css"
import "./../../node_modules/slick-carousel/slick/slick.css"
import "./../../node_modules/slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
        <h2>Music by Eian Klock</h2>
        <Slider {...settings}>
          <div>
            <YoutubeEian1 />
          </div>
          <div>
            <YoutubeEian2 />
          </div>
          <div>
            <YoutubeEian3 />
          </div>
        </Slider>
      </>
    );
  }
}

export function Button3() {
  return (
    <>
      <h1>Cool Links</h1>
    </>
  );
}
