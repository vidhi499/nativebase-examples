import { extendTheme } from "native-base";
import React from "react";

export const customTheme = extendTheme({
  breakpoints: {
    base: 0,
    sm: 540,
    md: 1024,
    lg: 3000,
  },
  colors: {
    textColorDark: "#282828",
    textColorLight: "#8894a0",
    blueDark: "#2988f9",
    blueLight: "#87bcfb",
    blueSuperLight: "#b4d6f6",
    bgColorLight: "#F2F4FA",
  },
  shadow: {
    0: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "#00ad93",
          color: "#fff",
        },
      },
    },
  },
});
