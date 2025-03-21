"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full mx-auto overflow-hidden relative">
      <Slider {...settings}>
        {/* SLIDE 1 */}
        <div className="relative">
          <Image
            width={1920}
            height={600}
            className="w-full h-[60vh] md:h-[80vh] object-cover"
            src="/images/banner.jpg"
            alt="banner"
          />
          {/* ✅ Matn qismi */}
          <div className="absolute inset-0 flex items-center px-6 md:px-20 lg:px-32">
            <div className="max-w-2xl bg-black/50 p-6 md:p-8 rounded-lg">
              <h1 className="text-white text-2xl md:text-4xl font-bold">
                Butunlay yangi ISUZU D-MAX!
              </h1>
              <p className="text-white text-sm md:text-lg mt-2">
                Zamonaviy dizayn va yuqori sifatli texnologiyalar.
              </p>
              <button className="mt-4 px-6 py-3 bg-white text-black font-medium rounded-md hover:scale-105 transition">
                Batafsil
              </button>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="relative">
          <Image
            width={1920}
            height={600}
            className="w-full h-[60vh] md:h-[80vh] object-cover"
            src="/images/banner2.jpg"
            alt="banner"
          />
          {/* ✅ Matn qismi */}
          <div className="absolute inset-0 flex items-center px-6 md:px-20 lg:px-32">
            <div className="max-w-2xl bg-black/50 p-6 md:p-8 rounded-lg">
              <h1 className="text-white text-2xl md:text-4xl font-bold">
                ISUZU yuk mashinalari
              </h1>
              <p className="text-white text-sm md:text-lg mt-2">
                Ishonchli va bardoshli transport vositalari.
              </p>
              <button className="mt-4 px-6 py-3 bg-white text-black font-medium rounded-md hover:scale-105 transition">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
