import * as React from "react";
import {
  Box,
  HStack,
  Icon,
  Path,
  Text,
  VStack,
  Row,
  Image,
  Input,
  Divider,
  Button,
  IconButton,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer from "react-native-swipe-gestures";

export default function ChooseRide() {
  let navigation = useNavigation();
  return (
    <>
      <GestureRecognizer
        onSwipeDown={(state) => {
          navigation.goBack();
        }}
      >
        <Box width="100%" bg="white" height="100%">
          <Box bg="white" py={5}>
            <VStack space={4}>
              <HStack bg="black" p={6} space={20}>
                <IconButton
                  onPress={() => navigation.goBack()}
                  icon={
                    <Icon viewBox="0 0 22 22" color="gray.200">
                      <Path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
                    </Icon>
                  }
                />
                <Box>
                  <Text color="white" fontSize={22}>
                    Choose a ride
                  </Text>
                </Box>
              </HStack>
              <Box p={3}>
                <Text fontSize={24} fontWeight={500}>
                  Economy
                </Text>
              </Box>
              <Row bg="white" px={1} py={3}>
                <Image
                  alt="car-image"
                  size={20}
                  source={{
                    uri:
                      "https://d3i4yxtzktqr9n.cloudfront.net/hulk/c4ca70eada901c083e41a6c10adcdc3b.png",
                  }}
                />
                <VStack>
                  <Row
                    justifyContent="space-between"
                    width="82%"
                    space={5}
                    pl={3}
                  >
                    <HStack space={3}>
                      <Text fontWeight={500} fontSize={22}>
                        UberGo
                      </Text>
                      <HStack space={1}>
                        <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                          <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                        </Icon>
                        <Text fontSize={16} fontWeight={500} mt={1}>
                          4
                        </Text>
                      </HStack>
                    </HStack>
                    <Box ml="2"></Box>
                    <Text fontWeight={500} fontSize={20}>
                      ₹75.00
                    </Text>
                  </Row>
                  <Row space={5} pl={3} pt={1} justifyContent="space-between">
                    <Text fontWeight={400}>4:42pm</Text>
                  </Row>
                  <Row space={5} pl={3} pt={1} justifyContent="space-between">
                    <Text fontWeight={400} color="gray.600">
                      Affordable, compact rides
                    </Text>
                  </Row>
                </VStack>
              </Row>
              {/*new row*/}
              <Row bg="white" px={1} py={3}>
                <Image
                  alt="car-image"
                  size={20}
                  source={{
                    uri:
                      "https://d3i4yxtzktqr9n.cloudfront.net/hulk/c4ca70eada901c083e41a6c10adcdc3b.png",
                  }}
                />
                <VStack>
                  <Row
                    justifyContent="space-between"
                    width="82%"
                    space={5}
                    pl={3}
                  >
                    <HStack space={3}>
                      <Text fontWeight={500} fontSize={22}>
                        Premier
                      </Text>
                      <HStack space={1}>
                        <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                          <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                        </Icon>
                        <Text fontSize={16} fontWeight={500} mt={1}>
                          4
                        </Text>
                      </HStack>
                    </HStack>
                    <Box ml="2"></Box>
                    <Text fontWeight={500} fontSize={20}>
                      ₹90.00
                    </Text>
                  </Row>
                  <Row space={5} pl={3} pt={1} justifyContent="space-between">
                    <Text fontWeight={400}>5:20pm</Text>
                  </Row>
                  <Row space={5} pl={3} pt={1} justifyContent="space-between">
                    <Text fontWeight={400} color="gray.600">
                      Comfortable sedans, top quality drivers
                    </Text>
                  </Row>
                </VStack>
              </Row>
              {/*new row*/}
              <Row bg="white" px={1} py={3}>
                <Image
                  alt="car-image"
                  size={20}
                  source={{
                    uri:
                      "https://d3i4yxtzktqr9n.cloudfront.net/hulk/c8ff0639c81e66d0c581c7229c91496c.png",
                  }}
                />
                <VStack>
                  <Row
                    justifyContent="space-between"
                    width="75%"
                    space={5}
                    pl={3}
                  >
                    <HStack space={3}>
                      <Text fontWeight={500} fontSize={22}>
                        Moto
                      </Text>
                      <HStack space={1}>
                        <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                          <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                        </Icon>
                        <Text fontSize={16} fontWeight={500} mt={1}>
                          1
                        </Text>
                      </HStack>
                    </HStack>
                    <Box pl={1}>
                      <Text fontWeight={500} fontSize={20}>
                        ₹38.00
                      </Text>
                    </Box>
                  </Row>
                  <Row space={5} pl={3} pt={1} justifyContent="space-between">
                    <Text fontWeight={400}>5:03pm</Text>
                  </Row>
                  <Row space={5} pl={3} pt={1} justifyContent="space-between">
                    <Text fontWeight={400} color="gray.600">
                      Affordable motorcycles rides
                    </Text>
                  </Row>
                </VStack>
              </Row>
              {/*new row*/}
              <Row bg="white" px={1} py={3}>
                <Image
                  alt="car-image"
                  size={20}
                  source={{
                    uri:
                      "https://d3i4yxtzktqr9n.cloudfront.net/hulk/b2db7c6ff6a547d9bb6e700d177760af.png",
                  }}
                />
                <VStack>
                  <Row
                    justifyContent="space-between"
                    width="78%"
                    space={5}
                    pl={3}
                  >
                    <HStack space={3}>
                      <Text fontWeight={500} fontSize={22}>
                        UberAuto
                      </Text>
                      <HStack space={1}>
                        <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                          <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                        </Icon>
                        <Text fontSize={16} fontWeight={500} mt={1}>
                          3
                        </Text>
                      </HStack>
                    </HStack>
                    <Box pl={1}>
                      <Text fontWeight={500} fontSize={20}>
                        ₹51.00
                      </Text>
                    </Box>
                  </Row>
                  <Row space={5} pl={3} pt={1} justifyContent="space-between">
                    <Text fontWeight={400}>5:07pm</Text>
                  </Row>
                  <Row space={5} pl={3} pt={1} justifyContent="space-between">
                    <Text fontWeight={400} color="gray.600">
                      Auto rikshaws at the tap of a button
                    </Text>
                  </Row>
                </VStack>
              </Row>
              {/*new row*/}
              <Row bg="white" px={1} py={3} width="100%">
                <Image
                  alt="car-image"
                  size={20}
                  source={{
                    uri:
                      "https://d3i4yxtzktqr9n.cloudfront.net/hulk/c4ca70eada901c083e41a6c10adcdc3b.png",
                  }}
                />
                <VStack pt={3}>
                  <Row justifyContent="space-between" width="81%" pl={3}>
                    <HStack space={3}>
                      <Text fontWeight={500} fontSize={22}>
                        UberGo Rentals
                      </Text>
                      <HStack space={1}>
                        <Icon viewBox="0 0 24 24" color="black" mt={2} size={3}>
                          <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                        </Icon>
                        <Text fontSize={16} fontWeight={500} mt={1}>
                          4
                        </Text>
                      </HStack>
                    </HStack>
                    <Box>
                      <Text fontWeight={500} fontSize={20}>
                        ₹75.00
                      </Text>
                    </Box>
                  </Row>
                  <Row space={5} pl={3} pt={1} justifyContent="space-between">
                    <Text fontWeight={400}>One car for many stops</Text>
                  </Row>
                </VStack>
              </Row>
              {/*new row*/}
            </VStack>
          </Box>
        </Box>

        <Box bottom={0} position="absolute" mt={3}>
          <Divider borderColor="gray.500" borderWidth={0.35} />
          <Row bg="white" px={6} pt={3}>
            <Image
              alt="car-image"
              size={12}
              source={require("../../assets/cash.png")}
            />
            <Row
              justifyContent="space-between"
              width="90%"
              space={5}
              pl={5}
              pt={1}
            >
              <Text fontWeight={500} fontSize={16} pt={1}>
                Cash
              </Text>
              <Icon viewBox="0 0 16 16" mt="5px" size={3} color="black">
                <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </Icon>
            </Row>
          </Row>
        </Box>
      </GestureRecognizer>
    </>
  );
}
