/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeGray: "#475156",
        clay: "#e8e7df",
      },
      animation: {
        slideInOpLogo: "slideIn 0.7s ease-in forwards",
        slideInOpText: "slideIn 0.7s ease-in 1.0s forwards",
        slideInOpSubText: "slideIn 0.7s ease-in 1.2s forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(15px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
