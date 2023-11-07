import { Button } from "@nextui-org/react";
import Image from "next/image";
import { SOCIALS } from "@/constants";
import Link from "next/link";

import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const iconMap: { [key: string]: JSX.Element } = {
  FaYoutube: <FaYoutube size={32} />,
  FaInstagram: <FaInstagram size={32} />,
  FaTiktok: <FaTiktok size={32} />,
  FaWhatsapp: <FaWhatsapp size={32} />,
};

export default function Banner() {
  return (
    <section className="overflow-hidden">
      <Image
        src="/heroDesktop.webp"
        alt="Banner"
        width={0}
        height={0}
        sizes="100vw"
        className="hidden md:block w-full h-auto bg-contain 3xl:max-w-[138rem] mx-auto 3xl:rounded-b-[3rem]"
        draggable={false}
      />

      <Image
        src="/heroMobile.webp"
        alt="Banner"
        width={0}
        height={0}
        sizes="100vw"
        className="md:hidden w-full h-auto bg-contain"
        draggable={false}
      />

      <div className="flex items-center justify-center gap-4 mt-10">
        <ul className="regular-14 flex gap-4 text-gray-30">
          {SOCIALS.links.map((link) => (
            <Link key={link.href} target="_blank" href={link.href}>
              <Button
                isIconOnly
                size="lg"
                startContent={iconMap[link.icon]}
                className="transition-all duration-300 bg-tmyellow text-white hover:scale-110 hover:bg-tmyellowHover p-2"
              />
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}
