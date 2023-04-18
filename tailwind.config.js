/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#2dccfc",

        secondary: "#9fea88",

        accent: "#ff856d",

        neutral: "#24242D",

        "base-100": "#F1F2F3",

        info: "#3D86C2",

        success: "#23E19F",

        warning: "#CEAB0D",

        error: "#FB3254",
      },
    },
  ],
  plugins: [require("daisyui")],
};
