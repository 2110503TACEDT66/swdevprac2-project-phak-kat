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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'hDark': '#3D2F28',
        'hCream': '#F2F0E4',
        'hBrown': '#B66F39',
        'hRed': '#D94E28',
        'hWhite': '#FFFFFF',
        'hBlack': '#404040'
      }
    },
  },
  plugins: [],
};
export default config;
