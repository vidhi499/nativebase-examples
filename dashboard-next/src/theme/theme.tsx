import { extendTheme } from "native-base";
export const theme = extendTheme({
  breakpoints: {
    base: 480,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 2000,
  },
  colors: {
    bgColorLight: "#F5F8FD",
    bgColorDark: "#212529",
    textColorDark: "#0e0e0e",
    textColorLight: "#8894a0",
    blueDark: "#2988f9",
    blueLight: "#87bcfb",
    blueSuperLight: "#b4d6f6",
  },
  components: {
    Heading: {
      baseStyle: {
        color: "custom.100",
      },
    },
  },
});
