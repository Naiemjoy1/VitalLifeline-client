/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif ",
        Playfair: "'Playfair Display', serif",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E53935",
          secondary: "#B71C1C",
          accent: "#81D4FA",
          neutral: "#343434",
          Gray: "#757575",
          Green: "#43A047",
          Blue: "#81D4FA",
          Gold: "#FFD700",
          "base-100": "#ffffff",
        },
      },
      "light",
      "synthwave",
    ],
  },
};
