import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box, NativeBaseProvider } from "native-base";
import { Flex } from "native-base";
import Map from "./src/components/Map";

export default function App() {
  return (
    <NativeBaseProvider>
      <Flex flex={1} bg="white">
        <Map />
      </Flex>
    </NativeBaseProvider>
  );
}
