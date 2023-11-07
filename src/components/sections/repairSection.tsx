import { IMG_LINK } from "@/constants/links";
import Image from "next/image";
import React from "react";
import { BsTools } from "react-icons/bs";

const RepairSection = () => {
  return (
    <section className="w-full mt-10 container mx-auto overflow-hidden text-tmDarkGray dark:text-gray-200 text-center md:text-justify">
      <div className="flex flex-col xl:flex-row-reverse justify-center gap-5">
        <Image
          src={`${IMG_LINK.gallery_06}`}
          alt="Imagem que ilustra o veículo de delivery da oficina."
          width={0}
          height={0}
          sizes="100vw"
          className="w-full xl:w-1/3 h-full sm:max-h-[30rem] xl:max-h-full aspect-square object-center object-cover sm:rounded-3xl xl:rounded-tl-[40%] xl:rounded-br-[40%]"
        />

        <div className="flex flex-col items-center justify-center md:items-start w-full xl:w-2/3 px-5 ">
          <p className="uppercase regular-18 mb-3 text-tmyellow flex justify-center md:justify-start gap-2 items-center">
            Manutenção Eficiente{" "}
            <span className="hidden md:block">e de qualidade</span>
            <BsTools size={28} />
          </p>
          <div className="w-full">
            <h2 className="bold-40 lg:bold-52 2xl:bold-64">Manutenção Detalhada</h2>
            <p className="regular-16 mt-5 w-full xl:max-w-3xl text-justify">
              <span className="font-medium">
                Oferecemos o melhor serviço de manutenção e reparos de
                bicicletas na região. Nossa equipe é composta por especialistas
                altamente competentes e experientes, prontos para cuidar da sua
                bicicleta como ninguém mais.
              </span>{" "}
              Aqui a excelência é o nosso compromisso. Se sua bicicleta precisa
              de manutenção ou reparos, você pode confiar em nós para oferecer
              soluções eficazes e duradouras. Traga a sua bicicleta até nós e
              experimente o serviço superior que nos tornou os melhores da
              região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairSection;
