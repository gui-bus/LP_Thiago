"use client";
import React from "react";
import { IMG_LINK } from "@/constants/links";

import { FaMapMarkerAlt } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

const LocationSection = () => {
  return (
    <section className="md:container mx-auto flex items-center justify-center flex-col mt-10 overflow-y-hidden text-tmDarkGray dark:text-gray-200">
      <div className="px-5 container w-fit pb-10 xl:pb-20 text-center md:text-justify">
        <p className="uppercase regular-18 mb-3 text-tmyellow flex justify-center md:justify-start gap-2 items-center">
          Estamos aqui por você <FaMapMarkerAlt size={28} />
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Localização Estratégica
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px] text-justify">
            Estamos comprometidos em fornecer serviços de alta qualidade aos
            nossos clientes. Pensando nisso e também para garantir uma
            experiência conveniente, possuímos duas oficinas estrategicamente
            posicionadas. Essa abordagem nos permite oferecer um atendimento
            eficiente e resultados de excelência.
          </p>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center gap-4 px-3">
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src={`${IMG_LINK.image_01}`}
            alt="Imagem que ilustra a oficina no Jardim Aquárius."
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto bg-cover bg-center md:rounded-2xl"
          />

          <div className="flex flex-col items-center justify-center p-5 gap-2">
            <h3 className="font-semibold text-xl">Thiago Oficina Escola</h3>
            <p className="text-center h-8">
              Av. Dep. Benedito Matarazzo, 5101 - Aquarius, São José dos Campos
              - SP
            </p>

            <div className="flex flex-col items-center justify-center">
              <p className="font-medium">Horário de Funcionamento</p>
              <p className="text-center h-8">
                Segunda a Sábado - das 09:00 às 21:00
                <br />
                Domingo - das 10:00 às 18:00
              </p>
            </div>

            <Link isExternal href="" className="w-full max-w-xs">
              <Button
                className="w-full bg-tmyellow transition-all duration-300 hover:bg-tmyellowHover text-white font-bold mt-4"
                variant="shadow"
                endContent={<TbMapSearch size={24} />}
              >
                Ver no Google Maps
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src={`${IMG_LINK.image_01}`}
            alt="Imagem que ilustra a oficina no Jardim Aquárius."
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto bg-cover bg-center md:rounded-2xl"
          />

          <div className="flex flex-col items-center justify-center p-5 gap-2">
            <h3 className="font-semibold text-xl">Thiago Oficina Escola</h3>
            <p className="text-center h-8">
              Av. Maria de Lourdes Friggi, 381 - Urbanova, São José dos Campos -
              SP
            </p>

            <div className="flex flex-col items-center justify-center">
              <p className="font-medium">Horário de Funcionamento</p>
              <p className="text-center h-8">
                Segunda a Sexta - das 09:00 às 19:00
                <br />
                Sábado e Domingo - das 07:00 às 14:00
              </p>
            </div>

            <Link isExternal href="" className="w-full max-w-xs">
              <Button
                className="w-full bg-tmyellow transition-all duration-300 hover:bg-tmyellowHover text-white font-bold mt-4"
                variant="shadow"
                endContent={<TbMapSearch size={24} />}
              >
                Ver no Google Maps
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
