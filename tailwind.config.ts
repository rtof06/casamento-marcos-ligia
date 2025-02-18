import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "backgound-color": "#FBF8F1",
        "main-color": "#758FA3",
        "sec-green": "#617F95",
        "third-green": "#424740",
      },
      fontFamily: {
        titleFont: ['Milan', 'serif'],
        secTitleFont: ['Milan', 'serif'],
        textFont: "var(--textFont)",
      }
    },
  },
  plugins: [],
};
export default config;
