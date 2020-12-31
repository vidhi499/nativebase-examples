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

export default function RentalsBottomBar() {
  return (
    <Box width="100%" bg="white" zIndex={2} bottom={0} position="absolute">
      <Box bg="white" py={5}>
        <VStack space={3}>
          <Row justifyContent="center">
            <Text fontSize={16} fontWeight={400}>
              Choose a ride, swipe up for more
            </Text>
          </Row>

          <Row bg="primary" px={4} py={4}>
            <Image
              alt="car-image"
              size={16}
              source={{
                uri:
                  "https://d3i4yxtzktqr9n.cloudfront.net/hulk/c4ca70eada901c083e41a6c10adcdc3b.png",
              }}
            />
            <VStack>
              <HStack space={5} pl={3} pt={2}>
                <Text fontWeight={500} fontSize={20}>
                  UberGo Rentals
                </Text>
                <HStack space={2}>
                  <Icon viewBox="0 0 24 24" color="black" mt={1} size={4}>
                    <Path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
                  </Icon>
                  <Text fontSize={18} fontWeight={500} mt="2px">
                    4
                  </Text>
                </HStack>
                <Box ml="2"></Box>
                <Text fontWeight={500} fontSize={20}>
                  $159.00
                </Text>
              </HStack>
              <Row space={5} pl={3} pt={2} justifyContent="space-between">
                <Text fontWeight={400} fontSize={16}>
                  11:32 am pickup
                </Text>

                <Box ml="2"></Box>
                <Text fontWeight={400} color="gray.500" fontSize={16}>
                  1 hr/10 km
                </Text>
              </Row>
            </VStack>
          </Row>
          <Row bg="white" px={6}>
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
              pt={2}
            >
              <Text fontWeight={500} fontSize={20}>
                Cash
              </Text>
              <Icon viewBox="0 0 16 16" mt={1} size={5} color="black">
                <Path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </Icon>
            </Row>
          </Row>
          <Box px={4} mt={2}>
            <Button
              color="white"
              p={4}
              fontSize={18}
              borderRadius={0}
              variant="solid"
              bg="black"
            >
              Confirm UberGo Rentals
            </Button>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
