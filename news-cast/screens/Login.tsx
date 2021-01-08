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
  Divider,
  VStack,
  Icon,
  Path,
  HStack,
  Image,
  Row,
  Link,
  AspectRatio,
} from "native-base";
import CustomInput from "../Components/CustomInput";
import CustomDivider from "../Components/CustomDivider";
import CustomButton from "../Components/CustomButton";

export default function Login() {
  return (
    <Box bg="white" height="100%">
      <Text color="black" mt={10}></Text>
      <Modal isCentered isOpen={true} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent position="absolute" width="100%" py={2} bottom={0}>
          <ModalHeader verticleAlign="middle" py={4} px={3}>
            {/* <Text
              px={1}
              fontSize={17}
              fontWeight={600}
              lineHeight="22px"
              fontFamily="HK Grotesk"
            >
              Logo
            </Text> */}
            <AspectRatio ratio={3 / 1} width={120}>
              <Image
                resizeMode="contain"
                alt="logo"
                source={require("../assets/NewsChat.png")}
              />
            </AspectRatio>
          </ModalHeader>
          <ModalBody py={1} pl={5}>
            <Text fontSize={22} fontWeight={600}>
              Create an account to get started
            </Text>
            <CustomInput />
          </ModalBody>
          <ModalFooter px={0}>
            <CustomDivider />
            <VStack width="100%" p={4} space={5}>
              <Box>
                <CustomButton
                  text="Continue with Apple"
                  imgName="apple"
                  color="white"
                  bg="black"
                />
              </Box>
              <Box>
                <CustomButton
                  text="Continue with Google"
                  imgName="google"
                  color="#1F1F1F"
                  bg="#E6E6E6"
                />
              </Box>
              <Box>
                <CustomButton
                  text="Continue with Facebook"
                  imgName="facebook"
                  color="white"
                  bg="#4267B2"
                />
              </Box>
              <Row justifyContent="center">
                <Text fontSize={13} fontWeight={500}>
                  Already have a account?{" "}
                </Text>
                <Link
                  fontSize={13}
                  fontWeight={500}
                  isUnderlined={false}
                  color="#0486D2"
                >
                  Log in
                </Link>
              </Row>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
