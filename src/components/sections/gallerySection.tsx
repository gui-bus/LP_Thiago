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
                className={`swiper-slide w-full md:w-[80rem] h-[25rem] bg-cover bg-center md:rounded-2xl ${data.bgImage} bg-no-repeat`}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
          <FaCircleChevronRight className="rounded-full text-white" />
        </div>
      </Swiper>

      <div className="flex items-center justify-end mt-2 px-6 lg:-mt-28 z-50 relative text-center md:text-left">
        <div className="bg-tmDarkGray p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:p-12 relative w-full overflow-hidden rounded-3xl drop-shadow-2xl text-center">
          <h2 className="regular-24 md:regular-32 text-white">
            <span className="font-bold">
              Conheça o melhor do mundo das bicicletas
            </span>{" "}
            na nossa oficina!
          </h2>
          <p className="text-base md:text-lg mt-5 text-white">
            Se você é um entusiasta de bicicletas em busca de inspiração, nossa
            galeria está aqui para mostrar algumas das maravilhas do nosso
            espaço de trabalho.{" "}
            <span className="font-medium">
              Venha conosco nesta jornada de exploração pelo mundo das
              bicicletas!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
