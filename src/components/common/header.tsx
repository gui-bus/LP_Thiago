"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { HiSun, HiMoon, HiMenu } from "react-icons/hi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { RiTeamFill, RiHistoryFill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { FaMapMarkerAlt, FaStar, FaHome, FaWhatsapp } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";

export default function Header() {
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { label: "Página Inicial", path: "/", icon: <FaHome size={20} /> },
    { label: "Cursos", path: "/aulas", icon: <FaStar size={20} /> },
    { label: "Serviços", path: "/#Serviços", icon: <BsTools size={20} /> },
    { label: "Nossa Equipe", path: "/#Equipe", icon: <RiTeamFill size={20} /> },
    {
      label: "Unidades Oficina Escola",
      path: "/#Unidades",
      icon: <FaMapMarkerAlt size={20} />,
    },
  ];

  const discoverItems = [
    { label: "Galeria", path: "/aulas", icon: <IoMdImages size={20} /> },
    {
      label: "Nossa História",
      path: "/#Serviços",
      icon: <RiHistoryFill size={20} />,
    },
  ];

  return (
    <Navbar
      isBlurred={false}
      className="bg-[#292929] py-2 drop-shadow-xl"
      isBordered
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Thiago Mêcanica e Oficina Escola"
              width={0}
              height={0}
              sizes="100vw"
              className="w-44 h-auto object-contain"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="solid"
              className="hoverButton"
              endContent={
                theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />
              }
              onClick={toggleTheme}
              isIconOnly
            />

            <Sheet>
              <SheetTrigger asChild className="text-white">
                <Button
                  isIconOnly
                  className="transition-all duration-300 bg-tmyellow text-white hover:bg-tmyellowHover"
                  endContent={<HiMenu size={28} />}
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-center">
                    <Link href="/">
                      <Image
                        src="/logo.svg"
                        alt="Thiago Mêcanica e Oficina Escola"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-64 h-auto object-contain"
                      />
                    </Link>
                  </SheetTitle>
                  <SheetDescription className="text-gray-200 w-full max-w-xs mx-auto">
                    <SheetClose asChild>
                      <Link
                        href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0"
                        target="_blank"
                        className="w-full"
                      >
                        <Button
                          className="bg-green-500 transition-all duration-300 hover:bg-green-400 w-full text-white font-bold mt-5"
                          endContent={<FaWhatsapp size={24} />}
                        >
                          WhatsApp
                        </Button>
                      </Link>
                    </SheetClose>
                    <div className="border-b border-white my-5" />
                    <nav className="my-5">
                      <ul className="flex flex-col items-center justify-center w-full gap-2">
                        {navItems.map((item, index) => (
                          <li
                            key={index}
                            className="w-full flex justify-center"
                          >
                            <SheetClose asChild>
                              <Button
                                type="submit"
                                className="w-full font-medium hover:bg-tmyellow text-white border-tmyellow transition-all duration-300"
                                onClick={() => router.push(item.path)}
                                endContent={item.icon}
                                variant="bordered"
                              >
                                {item.label}
                              </Button>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    <h2 className="flex justify-center font-bold text-xl mt-4" />
                    <div className="border-b border-white my-5" />
                    <nav className="my-5">
                      <ul className="flex flex-col items-center justify-center w-full gap-2">
                        {discoverItems.map((item, index) => (
                          <li
                            key={index}
                            className="w-full flex justify-center"
                          >
                            <SheetClose asChild>
                              <Button
                                type="submit"
                                className="w-full font-medium hover:bg-tmyellow text-white border-tmyellow transition-all duration-300"
                                onClick={() => router.push(item.path)}
                                endContent={item.icon}
                                variant="bordered"
                              >
                                {item.label}
                              </Button>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
