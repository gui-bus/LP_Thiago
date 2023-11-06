import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiSeedlingFill, RiInformationFill } from "react-icons/ri";

const LessonHomeSection = () => {
  return (
    <section className="w-full mt-10 container mx-auto overflow-hidden text-tmDarkGray text-center md:text-justify">
      <div className="flex flex-col xl:flex-row justify-center gap-5">
        <Image
          src="/gallery/01.webp"
          alt="Imagem que ilustra o ensino da oficina."
          width={0}
          height={0}
          sizes="100vw"
          className="w-full xl:w-1/3 h-auto aspect-square object-center object-cover md:rounded-xl xl:rounded-tl-[40%] xl:rounded-br-[40%]"
        />

        <div className="flex flex-col items-center md:items-start justify-center w-full xl:w-2/3 px-5">
          <p className="uppercase regular-18 mb-3 text-tmyellow flex justify-center md:justify-start gap-2 items-center">
            Invista em você <RiSeedlingFill size={28} />
          </p>
          <div className="w-full">
            <h2 className="bold-40 lg:bold-64">Treinamento Personalizado</h2>
            <p className="regular-16 mt-5 w-full max-w-3xl text-justify">
              Em nossa oficina, proporcionamos um ensino de excelência para o
              seu aprendizado. Você pode optar por participar de nossas aulas ao
              vivo, onde terá a oportunidade de aprender em um ambiente real,
              dentro de nossa oficina, com nossos especialistas. Além disso,
              oferecemos videoaulas gravadas de alta qualidade para que você
              possa aprimorar suas habilidades e conhecimentos em manutenção de
              bicicletas no seu próprio ritmo.
            </p>
          </div>

          <Link href="/aulas">
            <Button
              className="bg-tmyellow font-bold text-white my-8 p-8 transition-all hover:bg-tmyellowHover duration-300"
              endContent={<RiInformationFill size={24} />}
            >
              Ver mais informações
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LessonHomeSection;
