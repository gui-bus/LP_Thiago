import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.jpg')",
        pattern: "url('/pattern.webp')",
        gallery01: "url(/gallery/01.webp)",
        gallery02: "url(/gallery/02.webp)",
        gallery03: "url(/gallery/03.webp)",
        gallery04: "url(/gallery/04.webp)",
        gallery05: "url(/gallery/05.webp)",
        gallery06: "url(/gallery/06.webp)",
        gallery07: "url(/gallery/07.webp)",
        gallery08: "url(/gallery/08.webp)",
        gallery09: "url(/gallery/09.webp)",
        gallery10: "url(/gallery/10.webp)",
      },
      colors: {
        tmblue: "#002746",
        tmyellow: "#ffae00",
        tmgray: "#101d23",
        tmDarkGray: "#333333",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
