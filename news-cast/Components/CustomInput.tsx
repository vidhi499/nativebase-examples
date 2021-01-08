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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Icon,
} from "native-base";

export default function CustomInput() {
  return (
    <Box my={5}>
      <Input
        py={4}
        px={2}
        bg="#FAFAFA"
        placeholder="Enter your email"
        borderColor="rgba(48, 48, 48, 0.4)"
        borderWidth={0.5}
        fontWeight={400}
        fontSize={15}
        placeholderTextColor="#303030"
        opacity={0.6}
        rounded={6}
        InputLeftElement={
          <Box pl={3}>
            <Icon name="email" size={4} color="rgba(48, 48, 48, 0.6)" />
          </Box>
        }
      ></Input>
    </Box>
  );
}
