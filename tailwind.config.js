/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343541",
        sidebar_primary: "#1F2022",
        secondary: "#3E3F4B",
        btn_primary: "#10A37F",
        input_primary: "#40414F",
      },
    },
  },
  plugins: [],
};
