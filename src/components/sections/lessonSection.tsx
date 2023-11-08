"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { BiLogoWhatsapp } from "react-icons/bi";
import { GiStairsGoal } from "react-icons/gi";

const tel = "1239355114";

const LessonSection = () => {
  return (
    <section className="md:container mx-auto flex items-center justify-center flex-col mt-10 overflow-y-hidden text-tmDarkGray dark:text-gray-200">
      <div className="px-5 container w-full pb-10 xl:pb-20 ">
        <p className="uppercase regular-18 mb-3 text-tmyellow flex justify-center lg:justify-start gap-2 items-center">
          Impossível não aprender <GiStairsGoal size={28} />
        </p>
        <div className="flex flex-col items-center md:items-start justify-center gap-5 text-tmDarkGray dark:text-gray-200">
          <h2 className="bold-40 lg:bold-64 text-center md:text-left">
            Aprendizado de Elite
          </h2>
          <p className="regular-16 text-center md:text-justify">
            Aqui na nossa oficina, dedicamos tempo e esforço para garantir que
            você tenha a melhor experiência de aprendizado possível. Nossas
            aulas são projetadas para atender às necessidades de todos os
            entusiastas de bicicletas, sejam eles iniciantes ou experientes.
            Oferecemos duas opções para personalizar sua jornada de aprendizado:
          </p>

          <ul className="regular-16 text-center md:text-justify gap-4 flex flex-col">
            <li>
              <strong>Videoaulas Gravadas:</strong> Para maior flexibilidade
              disponibilizamos videoaulas gravadas de alta qualidade. Isso
              permite que você estude no seu próprio ritmo, revisite os
              conceitos quantas vezes desejar, por um periodo de um ano, e
              aprimore seus conhecimentos de manutenção de bicicletas. Além
              disso, nosso instrutor altamente qualificado está sempre
              disponível para esclarecer dúvidas e oferecer orientações
              adicionais. Estamos comprometidos em ajudá-lo a se tornar um
              especialista em manutenção de bicicletas, para que você possa
              aproveitar ao máximo sua paixão por pedalar.
            </li>
            <li>
              <strong>Aulas ao Vivo:</strong> Nossas aulas ao vivo proporcionam
              uma experiência prática e interativa. Você terá a oportunidade de
              aprender em um ambiente real, dentro de nossa oficina, com nossos
              especialistas. Isso lhe dará a chance de aprimorar suas
              habilidades sob orientação especializada.
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center w-full gap-4">
            <p className="text-center md:text-justify font-bold">
              Para mais informações entre em contato pelo botão abaixo
            </p>

            <Link
              target="_blank"
              href={`https://wa.me/${tel}?text=${encodeURI(
                "Olá, vim pelo site da oficina e gostaria de mais informações sobre as aulas presenciais!"
              )}`}
              className="w-full flex justify-center"
            >
              <Button
                className="bg-tmyellow p-6 text-white font-bold w-full max-w-sm  transition-all hover:bg-tmyellowHover duration-300"
                endContent={<BiLogoWhatsapp size={28} />}
              >
                Agendar Treinamento
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonSection;
