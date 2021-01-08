import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
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
    <>
      <NativeBaseProvider theme={theme}>
        <Login />
      </NativeBaseProvider>
      <StatusBar />
    </>
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
