/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora"],
      },
      colors: {
        themeGray: "#475156",
        clay: "#e8e7df",
        beige: "#E8E7DF",
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-in-out forwards",
        slideIn: "slideIn 0.7s ease-in-out forwards",
        slideInOpLogo: "slideIn 0.7s ease-in-out forwards",
        slideInOpText: "slideIn 0.7s ease-in-out 1.0s forwards",
        slideInOpSubText: "slideIn 0.7s ease-in-out 1.2s forwards",
        slideInCatchCopyText: "slideInLg 1s linear forwards",
        slideInLeftSide: "slideInLeftSide 0.7s ease-in-out forwards",
        slideInRightSide: "slideInRightSide 0.7s ease-in-out forwards",
        slideOutOp: "slideOut 0.5s ease-in-out 0s forwards",
        slideOutKeyVisualFirst: "slideOut 0.5s ease-in-out 5s forwards",
        slideFromBottom: "slideFromBottom 1s ease-in-out forwards",
        slideToBottom: "slideToBottom 1s ease-in-out forwards",
        firstFadeOutPanel: "fadeOut 0.3s ease-in-out 3.1s forwards",
        secondFadeOutPanel: "fadeOut 0.3s ease-in-out 3.15s forwards",
        thirdFadeOutPanel: "fadeOut 0.3s ease-in-out 3.2s forwards",
        fourthFadeOutPanel: "fadeOut 0.3s ease-in-out 3.25s forwards",
        fifthFadeOutPanel: "fadeOut 0.3s ease-in-out 3.3s forwards",
        sixthFadeOutPanel: "fadeOut 0.3s ease-in-out 3.35s forwards",
        seventhFadeOutPanel: "fadeOut 0.3s ease-in-out 3.4s forwards",
        eighthFadeOutPanel: "fadeOut 0.3s ease-in-out 3.45s forwards",
        infiniteScroll: "infiniteScroll 60s linear infinite",
        infiniteSlideLeft: "infiniteSlideLeft 40s linear infinite",
        infiniteSlideRight: "infiniteSlideRight 30s linear infinite",
        shrink: "shrink 1s ease-in-out forwards",
        rotatePositive: "rotatePositive 2s ease-in-out forwards",
        rotateNegative: "rotateNegative 2s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
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
        slideInLeftSide: {
          "0%": {
            opacity: 0,
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        slideInRightSide: {
          "0%": {
            opacity: 0,
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
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
        slideFromBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "70%": {
            opacity: 1,
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideToBottom: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "70%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(100%)",
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
        infiniteScroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        infiniteSlideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        infiniteSlideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        shrink: {
          "0%": { transform: "scale(125%)" },
          "100%": { transform: "scale(100%)" },
        },
        rotatePositive: {
          "0%": { opacity: 0, transform: "rotate(-12deg)" },
          "100%": { opacity: 1, transform: "rotate(0deg)" },
        },
        rotateNegative: {
          "0%": { opacity: 0, transform: "rotate(12deg)" },
          "100%": { opacity: 1, transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: ["@tailwindcss/custom-forms"],
};
