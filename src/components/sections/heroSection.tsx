import { SOCIALS } from "@/constants";
import { IMG_LINK } from "@/constants/links";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

const iconMap: { [key: string]: JSX.Element } = {
  FaYoutube: <FaYoutube size={32} />,
  FaInstagram: <FaInstagram size={32} />,
  FaTiktok: <FaTiktok size={32} />,
  FaWhatsapp: <FaWhatsapp size={32} />,
};

import { HiStar } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="flex flex-col xl:flex-row w-full">
      <div className="pattern w-full md:gap-10">
        <div className="xl:w-2/3 py-16 px-8 flex flex-col items-center justify-center text-tmDarkGray">
          <div className="flex flex-col gap-4 items-start justify-center w-full text-center px-2">
            <h1 className="font-bold text-5xl md:text-6xl xl:whitespace-nowrap tracking-tighter pb-3 w-full">
              Excelência em Manutenção
            </h1>
            <p className="text-gray-30 md:text-2xl w-full md:max-w-[48rem] 2xl:max-w-[50rem] mx-auto">
              Seja bem-vindo ao epicentro da mecânica de alto nível e instrução
              especializada. Aqui, oferecemos serviços excepcionais e cursos de
              elite, onde a busca pela perfeição é uma constante.
            </p>
            <p className="font-bold text-xl w-full py-2 uppercase whitespace-nowrap">
              Impossível não aprender!
            </p>
          </div>

          <div className="mb-5 flex flex-wrap gap-3 items-center justify-center">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <HiStar key={index} size={24} className="text-tmyellow" />
                ))}
            </div>

            <p className="bold-16 lg:bold-20 text-gray-1">
              +50
              <span className="regular-16 lg:regular-20 ml-2">
                Avaliações excelentes
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 ">
            <ul className="regular-14 flex gap-4 text-gray-30">
              {SOCIALS.links.map((link) => (
                <Link key={link.href} target="_blank" href={link.href}>
                  <Button
                    isIconOnly
                    size="lg"
                    startContent={iconMap[link.icon]}
                    className="transition-all duration-300 bg-tmyellow text-white hover:scale-110 p-2"
                  />
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <Image
          src={IMG_LINK.thiago}
          alt="Thiago Mêcanica e Oficina Escola"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full md:mb-10 min-h-[40rem] xl:h-screen object-cover md:w-1/3 md:rounded-bl-full shadow-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
