/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
}

