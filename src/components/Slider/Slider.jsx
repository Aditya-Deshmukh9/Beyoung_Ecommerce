"use client";

import React from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "../../app/globals.css";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";

function Slider() {
  const imageUrls = [
    "https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/3.jpg",
    "https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/10.jpg",
    "https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/chinos-banner-big-saving-zone.jpg",
    "https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/Pyjamas.jpg",
    "https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/new9.jpg",
    "https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/10.jpg",
    "https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/chinos-banner-big-saving-zone.jpg",
    "https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/Pyjamas.jpg",
    "https://www.beyoung.in/api/catalog/homepage-5-dec/big-saving/new9.jpg",
  ];

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <Image src={url} width={100} height={100} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
