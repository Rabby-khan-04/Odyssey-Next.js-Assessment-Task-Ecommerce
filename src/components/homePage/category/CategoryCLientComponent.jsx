"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryCard from "./CategoryCard";

const CategoryCLientComponent = ({ categories }) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      loop={true}
      spaceBetween={0}
      className="mySwiper"
    >
      {categories.map((category) => (
        <SwiperSlide key={category.name}>
          <CategoryCard category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoryCLientComponent;
