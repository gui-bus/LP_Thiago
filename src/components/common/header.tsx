"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";

import { FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { useTheme } from "next-themes";

import { HiSun, HiMoon } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className="bg-[#292929] py-2 drop-shadow-xl z-[999]"
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="#"
            className="text-white hover:bg-default/50 px-4 py-2 rounded-full text-sm xl:text-base transition-all duration-300"
          >
            Sobre
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="px-4 py-2 text-white text-sm rounded-full xl:text-base transition-all duration-300"
                endContent={<FaChevronDown />}
                radius="sm"
                variant="light"
              >
                Serviços
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="manutencao_especializada"
              description="Manutenção especializada para atender às suas necessidades."
            >
              <span className="font-semibold">Manutenção Especializada</span>
            </DropdownItem>
            <DropdownItem
              key="aulas_ambiente_real"
              description="Aulas em ambiente real para uma experiência prática."
            >
              <span className="font-semibold">Aulas em Ambiente Real</span>
            </DropdownItem>
            <DropdownItem
              key="videoaulas_gravadas"
              description="Acesso a vídeoaulas gravadas para aprendizado flexível."
            >
              <span className="font-semibold">Vídeoaulas Gravadas</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            href="#"
            className="text-white hover:bg-default/50 px-4 py-2 rounded-full text-sm xl:text-base transition-all duration-300"
          >
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex items-center justify-center gap-2">
            <Button
              color="success"
              href="#"
              variant="shadow"
              endContent={<FaWhatsapp size={20} />}
              className="text-white transition-all duration-250 ease-in-out hover:bg-green-400"
            >
              WhatsApp
            </Button>

            <Button
              variant="solid"
              className="hoverButton"
              endContent={
                theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />
              }
              onClick={toggleTheme}
              isIconOnly
            />
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-10 flex flex-col items-center">
        <NavbarItem>
          <Link href="#" className="text-lg">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-lg">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-lg">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
