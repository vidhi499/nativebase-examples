import { extendTheme } from "native-base";
import React from "react";
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
  email: {
    path: (
      <g>
        <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
        <path
          fill-rule="evenodd"
          d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
        />
      </g>
    ),
    viewBox: "0 0 16 16",
  },
});
export default theme;
