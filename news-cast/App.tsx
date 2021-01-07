import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  NativeBaseProvider,
  Button,
  useToken,
  useTheme,
  Box,
  Text,
} from "native-base";
import theme from "./theme/theme";
import Login from "./screens/Login";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Login />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function Demo() {
  console.log(JSON.stringify(useTheme()));
  return <Box>fy</Box>;
}
