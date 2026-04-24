"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";
import BannerSlider from "./BannerSlider";

export default function BannerSliderClient({ data }) {
  return (
    <Swiper
      pagination={{ dynamicBullets: true, clickable: true }}
      modules={[Pagination, Navigation]}
      loop
      navigation
      className="banner-swiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <BannerSlider {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
