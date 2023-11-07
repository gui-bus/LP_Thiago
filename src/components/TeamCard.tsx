import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@nextui-org/react';

interface TeamCardProps {
    imgSrc: string;
    name: string;
    instagramLink: string;
    whatsappLink: string;
}

const TeamCard = ({ imgSrc, name, instagramLink, whatsappLink }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <Image
        src={imgSrc}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-60 md:w-72 h-full max-h-72 object-top object-cover rounded-3xl drop-shadow-xl"
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-bold text-xl mt-2">{name}</h3>
        <div className="flex items-center justify-center gap-2">
          <Link target="_blank" href={instagramLink}>
            <Button
              isIconOnly
              size="md"
              startContent={<FaInstagram size={24} />}
              className="transition-all duration-300 bg-tmyellow text-white hover:bg-tmyellowHover p-2"
            />
          </Link>
          <Link target="_blank" href={whatsappLink}>
            <Button
              isIconOnly
              size="md"
              startContent={<FaWhatsapp size={24} />}
              className="transition-all duration-300 bg-tmyellow text-white hover-bg-tmyellowHover p-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
