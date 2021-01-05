// @generated: @expo/next-adapter@2.1.52
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box, NativeBaseProvider } from "native-base";
import { useState } from "react";

export default function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <NativeBaseProvider>
      <Box width="100%" height="100%" bg="bgColor">
        tfguyhuiji
      </Box>
    </NativeBaseProvider>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
