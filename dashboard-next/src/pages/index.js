// @generated: @expo/next-adapter@2.1.52
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box, NativeBaseProvider } from "native-base";
import { useState } from "react";
import { theme } from "../theme/theme";
import Dashboard from "../components/Dasboard";

export default function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <NativeBaseProvider theme={theme}>
      <Dashboard />
    </NativeBaseProvider>
  ) : null;
}
