// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": ['"IBM Plex Sans"', "sans-serif"],
      },
      colors: {
        blue: {
          100: "#001141",
          90: "#001d6c",
          80: "#002d9c",
          70: "#0043ce",
          60: "#0f62fe",
          50: "#4589ff",
          40: "#78a9ff",
          30: "#a6c8ff",
          20: "#d0e2ff",
          10: "#edf5ff",
        },
        "cool-gray": {
          10: "#012161",
          90: "#21272a",
          80: "#343a3f",
          70: "#4d5358",
          60: "#697077",
          50: "#878d96",
          40: "#a2a9b0",
          30: "#c1c7cd",
          20: "#dde1e6",
          10: "#f2f4f8",
        },
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
