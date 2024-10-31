/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue: "#3D4ABA",
        green: "#07E092",
        lightGray: "#FAFAFF",
        black: "#070417",
        purple: "#9B51E0",
        orange: "#FFA656",
        dark: "#18152C",
        pink: "#FD5B71",
        gray: "#828282",
        white: "#FFFFFF",
        pinkLight: "#FFEFF1",
        purpleLight: "#F5EEFC",
        lightPurple: "#E9E9FF",
        black: "#070417",
        lightBlack: "#8f8da2",
      },
      fontFamily: {
        rubikLight: ["Rubik_300Light"],
        rubikRegular: ["Rubik_400Regular"],
        rubikMedium: ["Rubik_500Medium"],
        rubikSemiBold: ["Rubik_600SemiBold"],
        rubikBold: ["Rubik_700Bold"],
        rubikExtraBold: ["Rubik_800ExtraBold"],
        rubikBlack: ["Rubik_900Black"],
      },
    },
  },
  plugins: [],
};
