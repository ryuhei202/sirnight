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
        beige: "#E8E7DF",
      },
      animation: {
        slideInOpLogo: "slideIn 0.7s ease-in-out forwards",
        slideInOpText: "slideIn 0.7s ease-in-out 1.0s forwards",
        slideInOpSubText: "slideIn 0.7s ease-in-out 1.2s forwards",
        slideInCatchCopyText: "slideInLg 1s linear forwards",
        slideOutOp: "slideOut 0.5s ease-in-out 0s forwards",
        slideOutKeyVisualFirst: "slideOut 0.5s ease-in-out 5s forwards",
        firstFadeOutPanel: "fadeOut 0.3s ease-in-out 3.1s forwards",
        secondFadeOutPanel: "fadeOut 0.3s ease-in-out 3.15s forwards",
        thirdFadeOutPanel: "fadeOut 0.3s ease-in-out 3.2s forwards",
        fourthFadeOutPanel: "fadeOut 0.3s ease-in-out 3.25s forwards",
        fifthFadeOutPanel: "fadeOut 0.3s ease-in-out 3.3s forwards",
        sixthFadeOutPanel: "fadeOut 0.3s ease-in-out 3.35s forwards",
        seventhFadeOutPanel: "fadeOut 0.3s ease-in-out 3.4s forwards",
        eighthFadeOutPanel: "fadeOut 0.3s ease-in-out 3.45s forwards",
        infiniteScrollFirst: "infiniteScrollFirst 30s linear infinite",
        infiniteScrollLast: "infiniteScrollLast 30s linear infinite",
        infiniteSlideLeft: "infiniteSlideLeft 20s linear infinite",
        infiniteSlideRight: "infiniteSlideRight 20s linear infinite",
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
        slideInLg: {
          "0%": {
            opacity: 0,
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideOut: {
          "0%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-15px)",
          },
        },
        fadeOut: {
          "0%": {
            height: "100%",
            opacity: 1,
          },
          "100%": {
            height: "0%",
            opacity: 0,
          },
        },
        infiniteScrollFirst: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-1104px)" },
        },
        infiniteScrollLast: {
          "0%": { transform: "translateY(1104px)" },
          "100%": { transform: "translateY(0)" },
        },
        infiniteSlideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        infiniteSlideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
