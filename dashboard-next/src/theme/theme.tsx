import { extendTheme } from "native-base";
const theme = extendTheme({
  colors: {
    bgColor: "#E9ECEE",
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
