import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

// import required modules
import { EffectCards } from "swiper";

const Gallery = ({ data }) => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data.map((image) => (
          <SwiperSlide><img className="h-[320px] w-[240px]" src={image} alt="img" /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
