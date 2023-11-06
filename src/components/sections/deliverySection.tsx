import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IMG_LINK } from "@/constants/links";

const tel = "1239355114";

const DeliverySection = () => {
  return (
    <section className="w-full mt-10 container mx-auto overflow-hidden text-tmDarkGray text-center md:text-justify">
      <div className="flex flex-col xl:flex-row justify-center gap-5">
        <Image
          src={`${IMG_LINK.delivery}`}
          alt="Imagem que ilustra o veículo de delivery da oficina."
          width={0}
          height={0}
          sizes="100vw"
          className="w-full xl:w-1/3 h-auto aspect-square object-center object-cover md:rounded-xl xl:rounded-tl-[40%] xl:rounded-br-[40%]"
        />

        <div className="flex flex-col items-center md:items-start justify-center w-full xl:w-2/3 px-5">
          <p className="uppercase regular-18 mb-3 text-tmyellow flex justify-center md:justify-start gap-2 items-center">
            <span className="hidden md:block">Conforto e </span>Qualidade à Sua
            Porta <FaHome size={28} />
          </p>
          <div className="w-full">
            <h2 className="bold-40 lg:bold-64">Bike Delivery</h2>
            <p className="regular-16 mt-5 w-full max-w-3xl text-justify">
              <span className="font-medium">
                Precisando cuidar da sua bike e está sem tempo ou não consegue
                levar até a oficina? Não se preocupe!
              </span>{" "}
              Nossa oficina oferece um serviço de delivery exclusivo e
              conveniente. Com a comodidade do nosso sistema de entrega, não é
              mais necessário sair de casa para cuidar da manutenção da sua
              bicicleta. Nossa equipe profissional buscará sua bicicleta na sua
              residência, realizará os serviços necessários com expertise e, em
              seguida, entregará sua bicicleta com segurança de volta à sua
              porta. Desfrute de um serviço de qualidade sem sair de casa,
              projetado para atender às suas necessidades com eficiência e
              conveniência.
            </p>
          </div>

          <Link
            target="_blank"
            href={`https://wa.me/${tel}?text=${encodeURI(
              "Olá, vim pelo site da oficina e gostaria de mais informações sobre o Bike Delivery!"
            )}`}
          >
            <Button
              className="bg-tmyellow font-bold text-white my-8 p-8 transition-all hover:bg-tmyellowHover duration-300"
              endContent={<FaTruckFast size={24} />}
            >
              Agendar delivery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
