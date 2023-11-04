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
        pattern: "url('/pattern.png')",
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
