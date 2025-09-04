/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-smaller": "500px",
      },
      colors: {
        brand: {
          corral: "#f73f79",
        },
      },
    },
  },
  plugins: [],
};
