import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box, NativeBaseProvider } from "native-base";
import { Flex } from "native-base";
import Map from "./src/components/Map";
import { customTheme } from "./src/theme/CustomTheme";

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Map />
    </NativeBaseProvider>
  );
}
