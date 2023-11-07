"use client";
import React, { useEffect, useState } from "react";
import { IMG_LINK } from "@/constants/links";
import { Divider, Spinner } from "@nextui-org/react";
import TeamCard from "../TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { LuBike } from "react-icons/lu";

const teamData = [
  {
    imgSrc: IMG_LINK.thiago,
    name: "Thiago Mecânico",
    instagramLink: "https://www.instagram.com/thiago.mecanico/",
    whatsappLink:
      "https://api.whatsapp.com/message/S3YZIF3336OBA1?autoload=1&app_absent=0",
  },
  {
    imgSrc: "/nei.jpg",
    name: "Nei Mecânico",
    instagramLink: "https://www.instagram.com/neei.mecanico/",
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=12997842430&text&type=phone_number&app_absent=0",
  },
  {
    imgSrc: "/gustavo.png",
    name: "Gustavo Mecânico",
    instagramLink: "https://www.instagram.com/gustavo_bucha_mecanico/",
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=12988429492&text&type=phone_number&app_absent=0",
  },
];

const TeamSection = () => {
  const [sliderPerView, setSliderPerView] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 480) {
        setSliderPerView(1);
      } else if (screenWidth < 720) {
        setSliderPerView(2);
      } else if (screenWidth < 1024) {
        setSliderPerView(3);
      } else {
        setSliderPerView(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="md:container mx-auto flex items-center justify-center flex-col mt-10 overflow-y-hidden text-tmDarkGray dark:text-gray-200">
      <div className="container mx-auto text-center px-5 text-tmDarkGray dark:text-gray-200">
        <h2 className="font-bold text-2xl md:bold-40 lg:bold-52 2xl:bold-64">
          Equipe de Elite
        </h2>
        <Divider className="my-4" />
        <p className="text-lg text-center my-2 font-semibold">
          Nossa equipe não só é composta por profissionais altamente
          qualificados, mas também por entusiastas do ciclismo.
        </p>

        <p className="text-base text-center my-2">
          Essa combinação de experiência e paixão nos permite entender as
          necessidades de manutenção com um olhar diferenciado, garantindo que
          suas bicicletas recebam sempre um atendimento de alta qualidade.{" "}
          <span className="font-semibold">Entender para atender!</span>
        </p>
      </div>

      {loading ? (
        <div className="w-full flex items-center justify-center mt-10">
          <Spinner color="warning" size="lg" />
        </div>
      ) : (
        <Swiper
          slidesPerView={sliderPerView}
          className="my-swiper-1 h-full w-full max-w-3xl object-cover gap-8 select-none"
          navigation={{
            enabled: true,
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
          spaceBetween={20}
        >
          <div className="swiper-button-prev">
            <FaCircleChevronLeft className="rounded-full text-tmDarkGray" />
          </div>
          {teamData.map((teamPerson, index) => (
            <SwiperSlide key={index}>
              <TeamCard
                key={index}
                imgSrc={teamPerson.imgSrc}
                name={teamPerson.name}
                instagramLink={teamPerson.instagramLink}
                whatsappLink={teamPerson.whatsappLink}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next">
            <FaCircleChevronRight className="rounded-full text-tmDarkGray" />
          </div>
        </Swiper>
      )}
    </section>
  );
};

export default TeamSection;
