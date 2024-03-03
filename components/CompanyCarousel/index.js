"use client";

import { Autoplay, A11y, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/parallax";

import CompanyImage from "./CompanyImage";

export default function CompanyCarousel() {
  return (
    <Swiper
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      // freeMode={true}
      speed={6000}
      slidesPerView={3}
      spaceBetween={100}
      loop={true}
      modules={[Autoplay, A11y]}
      className='company-swiper'
    >
      <SwiperSlide>
        <CompanyImage
          alt='pastor praying with wife, husband and child'
          src='/hero-1.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CompanyImage
          alt='pastor praying with wife, husband and child'
          src='/hero-1.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CompanyImage
          alt='worship leader'
          src='/hero-2.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CompanyImage
          alt='worship leader'
          src='/hero-2.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CompanyImage
          alt='baby dedication group photo'
          src='/hero-3.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CompanyImage
          alt='baby dedication group photo'
          src='/hero-3.jpg'
        />
      </SwiperSlide>
    </Swiper>
  );
}
