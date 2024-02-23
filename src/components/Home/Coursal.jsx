"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../app/globals.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../../public/home-page-banner-desktop-view.jpg";
import image2 from "../../../public/SHIRT-BANNER-DESKTOP-VIEW-13.jpg";
import Image from "next/image";

function CoursalPage() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CoursalPage;
