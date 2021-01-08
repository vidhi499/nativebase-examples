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
  Row,
  Divider,
  HStack,
} from "native-base";

export default function CustomDivider() {
  return (
    <HStack space={6} pb={2}>
      <Divider
        width="50%"
        borderColor="rgba(48, 48, 48, 0.6)"
        borderWidth={0.35}
      />
      <Text
        fontSize={13}
        fontWeight={500}
        color="rgba(48, 48, 48, 0.6)"
        mt={-2}
      >
        or
      </Text>
      <Divider
        width="50%"
        borderColor="rgba(48, 48, 48, 0.6)"
        borderWidth={0.35}
      />
    </HStack>
  );
}
