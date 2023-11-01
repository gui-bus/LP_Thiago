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
        herocover: "url('/herocover.webp')",
        heroimage: "url('/heroimage.jpg')",
        hero: "url('/hero.jpg')",
      },
      colors: {
        tmblue: "#002746",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
