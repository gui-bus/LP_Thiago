import Gallery from "@/components/sections/gallerySection";
import HeroSection from "@/components/sections/heroSection";
import AboutSection from "@/components/sections/aboutSection";
import DeliverySection from "@/components/sections/deliverySection";
import WashSection from "@/components/sections/washSection";
import { Divider } from "@nextui-org/react";
import RepairSection from "@/components/sections/repairSection";
import Products from "@/components/Products";
import LessonSection from "@/components/sections/lessonSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />

      <div className="md:px-5">
        <AboutSection />
      </div>

      <div className="flex flex-col items-center justify-center my-8">
        <div className="container mx-auto text-center px-5 text-tmDarkGray">
          <h2 className="bold-40 lg:bold-64 xl:text-4xl">
            Descubra nossos serviços
          </h2>
          <p className="text-lg text-center mt-2">
            Oferecemos uma ampla gama de serviços para atender às suas
            necessidades. Saiba mais sobre o que podemos fazer por você.
          </p>

          <Divider className="mt-5" />
        </div>
        <div className="md:px-5">
          <RepairSection />
          <DeliverySection />
          <WashSection />
        </div>

        <Products />
      </div>

      <div className="flex flex-col lg:flex-row w-full container mx-auto md:px-5">
        <div className="w-full xl:w-1/2">
          <Gallery />
        </div>
        <div className="w-full xl:w-1/2">
          <LessonSection />
        </div>
      </div>
    </main>
  );
}
