"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "@/components/shop/ProductCard";

const NewArrivalProductClient = ({ products }) => {
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
      {products.map((product) => (
        <SwiperSlide key={product.name}>
          <ProductCard {...product} className="border-r md:border-dark-gray" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewArrivalProductClient;
