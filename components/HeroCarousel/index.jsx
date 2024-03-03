"use client";

import {
  Autoplay,
  A11y,
  EffectFade,
  Scrollbar,
  Parallax,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/parallax";
import "swiper/css/pagination";

import HeroImage from "./HeroImage";

export default function HeroCarousel() {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
      }}
      slidesPerView={2}
      spaceBetween={100}
      pagination={{
        clickable: true,
      }}
      effect='fade'
      loop={true}
      modules={[Autoplay, A11y, Scrollbar, Parallax, Pagination]}
      // scrollbar={{
      //   el: ".swiper-scrollbar",
      //   draggable: true,
      //   dragSize: "auto",
      // }}
      className='custom-swiper'
    >
      <SwiperSlide>
        <HeroImage
          alt='pastor praying with wife, husband and child'
          src='/hero-1.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage
          alt='worship leader'
          src='/hero-2.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage
          alt='baby dedication group photo'
          src='/hero-3.jpg'
        />
      </SwiperSlide>
      {/* <div
        className='swiper-scrollbar'
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          }}
        ></div>
      </div> */}
    </Swiper>
  );
}
