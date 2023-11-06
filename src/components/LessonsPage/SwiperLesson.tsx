import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import Cards from "@/components/LessonsPage/Cards";
import { LESSONS } from "@/components/LessonsPage/LessonData";

interface LessonsSwiperProps {
  category: string;
  categoryTitle: string;
}

const LessonsSwiper = ({ category, categoryTitle }: LessonsSwiperProps) => {
  const [sliderPerView, setSliderPerView] = useState(2);
  const [loading, setLoading] = useState(true);

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
        setSliderPerView(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredLessons = LESSONS.links.filter((link) =>
    category ? link.category === category : true
  );

  return (
    <section className="w-full container mx-auto items-center justify-center p-5 gap-5 select-none">
      <h2 className="mb-3 font-bold text-xl">{categoryTitle}</h2>
      <Swiper
        slidesPerView={sliderPerView}
        className="my-swiper-1 h-full w-full object-cover gap-8"
        navigation={{
          enabled: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        spaceBetween={8}
      >
        <div className="swiper-button-prev">
          <FaCircleChevronLeft className="rounded-full text-white" />
        </div>
        {filteredLessons.map((link, index) => (
          <SwiperSlide key={index}>
            <Cards key={index} links={link} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
          <FaCircleChevronRight className="rounded-full text-white" />
        </div>
      </Swiper>
    </section>
  );
};

export default LessonsSwiper;
