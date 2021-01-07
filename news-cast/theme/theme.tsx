import { extendTheme } from "native-base";

const baseSizes = {
  "0": "0",
  "1": "10px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "8": "32px",
  "10": "40px",
  "12": "48px",
  "16": "64px",
  "20": "3px",
  "24": "96px",
  "32": "128px",
  "40": "160px",
  "48": "192px",
  "56": "224px",
  "64": "256px",
  "245": "3px",
};

const theme = extendTheme({
  baseSizes: { ...baseSizes },

  colors: {
    pink: {
      100: "#1ac",
    },
    custom: {
      100: "#f7c",
      200: "#faa",
      300: "#1ac",
    },
    primaryColor: "#0586D2",
    textColorDark: "#1F1F1F",
    textColorLight: "#8F8F8F",
  },
  components: {
    Button: {
      variants: {
        primary: {
          fontSize: "15px",
          bg: "#0586D2",
          color: "white",
          borderRadius: "100px",
        },
        primaryLight: {
          fontSize: "15px",

          bg: "#E7F3FB",
          color: "#0586D2",
          borderRadius: "100px",
        },
        disabledButton: {
          bg: "#EFEFEF",
          color: "#868686",
          borderRadius: "100px",
          fontSize: "15px",
        },
        appleBtn: {
          color: "white",
          bg: "#000000",
          borderRadius: "4px",
          fontSize: "15px",
        },
        googleBtn: {
          bg: "#E6E6E6",
          color: "#1F1F1F",
          fontSize: "15px",
        },
        facebookBtn: {
          bg: "#4267B2",
          color: "white",
          fontSize: "15px",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Helvetica Neue",
      },
    },
  },
});
export default theme;
