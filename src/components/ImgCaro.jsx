import React, { useState } from "react";
import Cardcra from "./Cardcra";
import cardImg from "../data/data";
import Slider from "react-slick";

import "./herocss.css"

function ImgCaro() {
 
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow:3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  return (<>
  <div className="flex w-full flex-center pt-24 " id="jwell">
  <div className="slider-container w-5/6 h-5/6">
  <Slider {...settings}>
      {cardImg.map((item, idx) => (
        <div key={idx} className="w-full h-full">

          <Cardcra {...item} />
        </div>
      ))} </Slider></div></div>
    </>
  );
}

export default ImgCaro;
