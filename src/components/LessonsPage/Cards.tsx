import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart3, BsYoutube } from "react-icons/bs";

interface CardProps {
  links: { title: string; href: string; category: string; src: string; };
}

const Cards: React.FC<CardProps> = ({ links }) => {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center bg-gradient-to-t from-tmDarkGray to-tmDarkGray/90 dark:from-[#777777] dark:to-[#505050] rounded-3xl cursor-default">
      <Image
        src={links.src}
        alt="Thiago Mecânico"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full max-w-[16rem] p-5 h-auto aspect-square object-contain rounded-t-3xl"
      />

      <div className="flex flex-col items-center justify-center w-full text-center gap-4 rounded-b-3xl p-5 text-white">
        <h2 className="font-semibold flex justify-center items-center h-16 capitalize pb-2">
          {links.title}
        </h2>
        <Link href={links.href} target="_blank" className="w-full">
          {links.category === "Free" ? (
            <Button
              className="bg-tmyellow font-bold text-white p-6 w-full"
              endContent={<BsYoutube size={20} />}
            >
              Acessar Youtube
            </Button>
          ) : (
            <Button
              className="bg-tmyellow font-bold text-white p-6 w-full"
              endContent={<BsCart3 size={20} />}
            >
              Acessat Hotmart
            </Button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Cards;
