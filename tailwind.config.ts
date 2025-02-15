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
        "backgound-color": "#EAEAEA",
        "main-color": "#A9B6A2",
        "sec-green": "#9BA58D",
        "third-green": "#424740",
      },
      fontFamily: {
        titleFont: 'var(--cinzel-decorative)',
        secTitleFont: 'var(--cinzel)',
        textFont: 'var(--crimson)'
      }
    },
  },
  plugins: [],
};
export default config;
