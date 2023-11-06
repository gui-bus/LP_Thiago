"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import galleryData from "../Gallery/galleryData";

const Gallery = () => {
  return (
    <section className="w-full select-none">
      <Swiper
        slidesPerView={"auto"}
        className="my-swiper-1 h-full w-full object-cover"
        navigation={{
          enabled: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
      >
        <div className="swiper-button-prev">
          <FaCircleChevronLeft className="rounded-full text-white" />
        </div>
        {galleryData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center md:container relative w-full h-[25rem] md:h-[40rem] mx-auto py-10">
              <div
                className={`swiper-slide w-full md:w-[80rem] h-[25rem] bg-cover bg-center rounded-2xl ${data.bgImage} bg-no-repeat`}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
          <FaCircleChevronRight className="rounded-full text-white" />
        </div>
      </Swiper>

      
    </section>
  );
};

export default Gallery;
