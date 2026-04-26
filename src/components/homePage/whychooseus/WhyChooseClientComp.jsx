"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ChooseCard from "./ChooseCard";

const WhyChooseClientComp = ({ chooseUsFeatures }) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      loop={true}
      spaceBetween={30}
      className="mySwiper"
    >
      {chooseUsFeatures.map((feature) => (
        <SwiperSlide key={feature.title}>
          <ChooseCard {...feature} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WhyChooseClientComp;
