import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  Box,
  Button,
  Column,
  HStack,
  Icon,
  Image,
  Path,
  Row,
  Text,
  VStack,
  View,
  Flex,
  Link,
  Ul,
  Li,
  ListIcon,
  Divider,
  Input,
  IconButton,
} from "native-base";
import Gravatar from "react-gravatar";

export default function MainContent() {
  return (
    <>
      <Box ml="270">
        {/* <Row> */}
        <Box shadow={9} borderBottomWidth={2} borderColor="gray.300">
          <Box px={[0, 30, 30, 30, 30]}>
            <Flex direction="row" align="center" justify="center">
              <Box display={["none", "none", "block", "block", "block"]}>
                <Input
                  width="200"
                  size="sm"
                  variant="unstyled"
                  placeholder="Search for something..."
                  color="textColorLight"
                  //   outlineColor="rgba(255, 0, 0, 0)"
                  //   outlineWidth={0}

                  focusBorderColor="blue.600"
                  InputLeftElement={
                    <Icon
                      name="search"
                      size={4}
                      pr={1}
                      color="textColorLight"
                    />
                  }
                />
              </Box>
              <Flex
                ml={[270, 270, "auto", "auto", "auto"]}
                direction="row"
                align="center"
              >
                <IconButton
                  variant="ghost"
                  display={["flex", "flex", "none", "none", "none"]}
                  icon={
                    <Icon viewBox="0 0 512 512" color="textColorDark" size={4}>
                      <Path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />
                      <Path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z" />
                      <Path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20    C512,404.954,503.046,396,492,396z" />
                    </Icon>
                  }
                />
                <Button
                  ml={2}
                  variant="ghost"
                  borderLeftWidth="0.25px"
                  rounded="0"
                  borderRightWidth="0.25px"
                  borderColor="gray.200"
                  p={4}
                >
                  <Icon
                    viewBox="0 0 512 512"
                    color="textColorLight"
                    size={5}
                    py="3px"
                  >
                    <Path d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04    V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483    c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419    H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z" />
                    <Path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z" />
                  </Icon>
                  <Box bg="red.800" rounded={50} ml={-2} px="3px">
                    <Text color="white" fontSize={10}>
                      2
                    </Text>
                  </Box>
                </Button>
                <Gravatar
                  email="meenum@geekyants.com"
                  style={{
                    borderRadius: 50,
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 4,
                  }}
                  size={30}
                  //   height="4"
                  default="monsterid"
                ></Gravatar>
                <Text fontWeight={500} color="gray.500">
                  Meenu Makkar
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
        {/* </Row> */}
      </Box>
    </>
  );
}
