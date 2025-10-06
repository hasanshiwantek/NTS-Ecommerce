import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens, // keep Tailwind defaults if needed
      xl: "1440px", // redefine xl to match Figma desktop
      "2xl": "1920px", // redefine for Figma big screen
      "3xl": "2560px", // optional for ultra-wide monitors
    },
    extend: {
      // Add your other theme extensions here
    },
  },
  plugins: [
    require("@tailwindcss/postcss"), // ✅ put plugin here
  ],
};

export default config;
