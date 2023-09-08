'use client';

import { Autoplay, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import HeroImage from './HeroImage';

export default function HeroCarousel() {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
      }}
      effect="fade"
      loop={true}
      modules={[Autoplay, A11y, EffectFade]}
    >
      <SwiperSlide>
        <HeroImage
          alt="pastor praying with wife, husband and child"
          src="/hero-1.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage alt="worship leader" src="/hero-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage alt="baby dedication group photo" src="/hero-3.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}
