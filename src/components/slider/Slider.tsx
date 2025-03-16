"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="">
        <img
        className="w-full md:h-full sm:h-2/5"
        src={'/images/banner.jpg'}
        alt="banner"
        />
      </div>
      <div>
      <img
        className="w-full h-full"
        src={'/images/banner.jpg'}
        alt="banner"
        />
      </div>
    </Slider>
  );
}