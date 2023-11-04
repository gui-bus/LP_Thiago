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
        pattern: "url('/pattern.png')",
        gallery01: "url(/gallery/01.jpg)",
        gallery02: "url(/gallery/02.jpg)",
        gallery03: "url(/gallery/03.jpg)",
        gallery04: "url(/gallery/04.jpg)",
        gallery05: "url(/gallery/05.jpg)",
        gallery06: "url(/gallery/06.jpg)",
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
