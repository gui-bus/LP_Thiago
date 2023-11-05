"use client";
import { IMG_LINK } from "@/constants/links";
import Image from "next/image";
import { BsTools } from 'react-icons/bs'

const AboutSection = () => {
  return (
    <section className="md:container mx-auto flex items-center justify-center flex-col mt-10 overflow-y-hidden text-tmDarkGray">
      <div className="px-5 container w-full pb-10 xl:pb-20 text-center md:text-justify">
        <p className="uppercase regular-18 mb-3 text-tmyellow flex justify-center md:justify-start gap-2 items-center">
          Nós estamos aqui por você <BsTools size={28}/>
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Manutenção Especializada
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px] xl:text-justify">
            Na nossa oficina, garantimos o funcionamento perfeito das suas
            bicicletas graças à nossa equipe de especialistas em manutenção.
            Além de realizar as manutenções necessárias, oferecemos um
            atendimento personalizado, diagnóstico rápido e soluções eficazes
            para qualquer problema. Você pode confiar em nós para cuidar de
            todos os detalhes da sua bicicleta, garantindo que ela esteja sempre
            pronta para suas aventuras.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center md:container relative w-full gap-5 overflow-hidden">
        <Image
          src={`${IMG_LINK.image_01}`}
          alt="Imagem que ilustra a oficina no Jardim Aquárius."
          width={0}
          height={0}
          sizes="100vw"
          className="w-full lg:w-[49%] h-auto bg-cover bg-center md:rounded-2xl hidden md:block"
        />
        <Image
          src={`${IMG_LINK.image_02}`}
          alt="Imagem que ilustra o profissionalismo da oficina."
          width={0}
          height={0}
          sizes="100vw"
          className="w-full lg:w-[49%] h-auto bg-cover bg-center md:rounded-2xl bg-gray-50"
        />
      </div>
    </section>
  );
};

export default AboutSection;
