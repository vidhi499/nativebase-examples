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
  Path,
  Image,
} from "native-base";
import { images } from "../utils/RequiedImages";

export default function CustomButton({
  text,
  imgName,
  color,
  bg,
}: {
  text: any;
  imgName: String;
  color: String;
  bg: String;
}) {
  return (
    <Button bg={bg} borderRadius="4px" py="14px" pl={0}>
      <Box position="absolute" left={3} top={3}>
        <Image
          size={5}
          //@ts-ignore
          source={images[imgName]}
          alt="google"
          resizeMode="contain"
        />
      </Box>
      <Text color={color} fontSize="15px" fontWeight={700}>
        {text}
      </Text>
    </Button>
  );
}
