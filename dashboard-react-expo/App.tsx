import { StatusBar } from "expo-status-bar";
import {
  MenuOptionGroup,
  NativeBaseProvider,
  MenuItemOption,
  Divider,
} from "native-base";
import React from "react";
import { Box } from "native-base";
import { customTheme } from "./src/theme/CustomTheme";
import Sidebar from "./src/components/Sidebar";
import MainContent from "./src/components/MainContent";

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Box>
        <Sidebar />
        <MainContent />
      </Box>
    </NativeBaseProvider>
  );
}
