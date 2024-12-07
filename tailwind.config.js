/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#6153CD", // Purple color
        dark: "#1F1F1F", // Black color
        white: "#FFFFFF", // White color
      },
      animation: {
        "float-image": "floatImage 6s ease-in-out infinite",
        "fade-in": "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        floatImage: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)", // Moves the image up
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #FFFB00, 0 0 10px #FFFB00, 0 0 15px #FFFB00",
          },
          "50%": {
            boxShadow: "0 0 10px #FFFB00, 0 0 20px #FFFB00, 0 0 30px #FFFB00",
          },
          "100%": {
            boxShadow: "0 0 5px #FFFB00, 0 0 10px #FFFB00, 0 0 15px #FFFB00",
          },
        },
      },
    },
  },
  plugins: [],
};
