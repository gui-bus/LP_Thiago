"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidVideos, BiLogoWhatsapp } from "react-icons/bi";
import { GiStairsGoal } from "react-icons/gi";

const tel = "1239355114";

const LessonSection = () => {
  return (
    <section className="md:container mx-auto flex items-center justify-center flex-col mt-10 overflow-y-hidden text-tmDarkGray">
      <div className="px-5 container w-full pb-10 xl:pb-20 ">
        <p className="uppercase regular-18 mb-3 text-tmyellow flex justify-center md:justify-start gap-2 items-center">
          Impossível não aprender <GiStairsGoal size={28} />
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="bold-40 lg:bold-64 text-center md:text-left">
            Aprendizado de Elite em Ambiente Real
          </h2>
          <p className="regular-16 text-justify">
            Na nossa oficina, oferecemos aulas de elite para o seu aprendizado.
            Você pode escolher entre nossas aulas ao vivo, onde você terá a
            oportunidade de aprender em um ambiente real, dentro de nossa
            oficina, com nossos especialistas. Além disso ambém disponibilizamos
            video-aulas gravadas de altíssima qualidade para que você possa
            aprimorar suas habilidades e conhecimento em manutenção de
            bicicletas no seu próprio ritmo.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 w-full">
            <Link
              target="_blank"
              href={`https://wa.me/${tel}?text=${encodeURI(
                "Olá, vim pelo site da oficina e gostaria de mais informações sobre as aulas presenciais!"
              )}`}
              className="w-full lg:w-1/2"
            >
              <Button
                className="bg-tmyellow p-6 text-white font-bold w-full"
                endContent={<BiLogoWhatsapp size={28} />}
              >
                Agendar Treinamento
              </Button>
            </Link>
            <Button
              className="bg-tmyellow p-6 text-white font-bold w-full lg:w-1/2"
              endContent={<BiSolidVideos size={28} />}
            >
              Acessar Videoaulas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonSection;
