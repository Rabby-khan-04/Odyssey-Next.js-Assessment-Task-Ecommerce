"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "./TestimonialCard";

const TestimonialClientComponent = ({ testimonials }) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
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
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <TestimonialCard {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialClientComponent;
