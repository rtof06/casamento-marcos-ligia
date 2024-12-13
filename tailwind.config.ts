import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-gradient": "linear-gradient(to bottom, #EAEAEA 80%, #A9B6A2 100%)"
      },
      colors: {
        "main-color": "#A9B6A2"
      }
    },
  },
  plugins: [],
};
export default config;
