/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          100: '#636b2f', 
          500: '#3e4b1d',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
