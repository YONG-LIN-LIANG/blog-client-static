/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/*.tsx"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xlg: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
