/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#007AFF",
          black: "#000A14",
        },

        grey: {
          100: "#757575",
          200: "#F8F8F8",
          300: "#F9F9F9",
        },
      },
      fontFamily: {
        thin: "GeistThin",
        extralight: "GeistExtralight",
        light: "GeistLight",
        normal: "GeistNormal",
        medium: "GeistMedium",
        semibold: "GeistSemibold",
        bold: "GeistBold",
        extrabold: "GeistExtrabold",
        black: "GeistBlack",
      },
    },
  },
  plugins: [],
};
