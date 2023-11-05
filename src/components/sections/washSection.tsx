import { IMG_LINK } from "@/constants/links";
import Image from "next/image";
import React from "react";
import { FaSoap } from "react-icons/fa";

const WashSection = () => {
  return (
    <section className="w-full mt-10 container mx-auto overflow-hidden text-tmDarkGray text-center md:text-justify">
      <div className="flex flex-col xl:flex-row-reverse justify-center gap-5">
        <Image
          src={`${IMG_LINK.wash}`}
          alt="Imagem que ilustra o sistema de bike wash express da oficina."
          width={0}
          height={0}
          sizes="100vw"
          className="w-full xl:w-1/3 h-auto aspect-square object-center object-cover md:rounded-xl xl:rounded-tl-[40%] xl:rounded-br-[40%]"
        />

        <div className="flex flex-col items-center md:items-start md:justify-center w-full xl:w-2/3 px-5">
          <p className="uppercase regular-18 mb-3 text-tmyellow flex justify-center md:justify-start gap-2 items-center">
            Lavagem Profissional{" "}
            <span className="hidden md:block">para Sua Bicicleta</span>
            <FaSoap size={28} />
          </p>
          <div className="w-full">
            <h2 className="bold-40 lg:bold-64">Bike Wash Express</h2>
            <p className="regular-16 mt-5 w-full max-w-3xl text-justify">
              <span className="font-medium">
                Sua bicicleta merece um tratamento de limpeza profissional e
                eficiente e estamos aqui para te ajudar!
              </span>{" "}
              Nosso serviço de limpeza de bicicletas é rápido e conveniente. Por
              apenas{" "}
              {(49.99).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}{" "}
              nossa equipe de especialistas cuidará da limpeza minuciosa da sua
              bicicleta, garantindo que ela fique impecável. Traga a sua
              bicicleta até nós e deixe o resto conosco. Em pouco tempo, ela
              estará reluzente e pronta para suas próximas aventuras. Conte com
              a Bike Wash Express para manter a sua bicicleta em excelente
              estado.
            </p>
          </div>

          <div className="w-full mt-2">
            <p className="font-bold">
              Este serviço está disponível apenas na unidade do Urbanova.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WashSection;
