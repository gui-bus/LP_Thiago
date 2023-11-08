import DeliverySection from "@/components/sections/deliverySection";
import WashSection from "@/components/sections/washSection";
import { Divider } from "@nextui-org/react";
import RepairSection from "@/components/sections/repairSection";
import LessonHomeSection from "@/components/sections/lessonHomeSection";

export default function ServicesSection() {
  return (
    <section id="Serviços">
      <div className="flex flex-col items-center justify-center mt-5 mb-8 w-full">
        <div className="mx-auto text-center text-tmDarkGray dark:text-gray-200">
          <h2 className="font-bold text-2xl md:bold-40 lg:bold-52 2xl:bold-64">
            Serviços Personalizados
          </h2>
          <Divider className="mt-4 mb-2" />
          <p className="text-lg text-center mt-2">
            Descubra a incrível seleção de serviços de alta qualidade oferecidos
            pela Thiago Oficina Escola.
          </p>
        </div>

        <div className="sm:px-5">
          <RepairSection />
          <DeliverySection />
          <WashSection />
          <LessonHomeSection />
        </div>
      </div>
    </section>
  );
}
