"use client";
import LessonsSwiper from "@/components/LessonsPage/SwiperLesson";
import Gallery from "@/components/sections/gallerySection";
import LessonSection from "@/components/sections/lessonSection";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Lessons = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <section className="w-full container mx-auto items-center justify-center p-5 gap-5 select-none">
      {loading ? (
        <div className="w-full flex items-center justify-center h-screen">
          <Spinner color="warning" size="lg" />
        </div>
      ) : (
        <div>
          <div className="flex flex-col lg:flex-row w-full container mx-auto md:px-5">
            <div className="w-full xl:w-1/2">
              <Gallery />
            </div>
            <div className="w-full xl:w-1/2">
              <LessonSection />
            </div>
          </div>

          <LessonsSwiper
            category="Rockshox"
            categoryTitle="Suspensões Rockshox"
          />
          <LessonsSwiper category="Fox" categoryTitle="Suspensões Fox" />
          <LessonsSwiper
            category="LeftyDianteiras"
            categoryTitle="Suspensões Lefty e Dianteiras"
          />
          <LessonsSwiper
            category="ShocksRockshoxFox"
            categoryTitle="Shocks Rockshox e Fox"
          />
          <LessonsSwiper category="RevisoesGeral" categoryTitle="Variadas" />

          <LessonsSwiper category="Free" categoryTitle="Aulas Grátis" />
        </div>
      )}
    </section>
  );
};

export default Lessons;
