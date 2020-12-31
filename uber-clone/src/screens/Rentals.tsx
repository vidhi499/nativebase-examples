import { Box, Icon, IconButton, Path } from "native-base";
import React from "react";
import Map from "./Map";
import BottomBar from "./BottomBar";
import RentalsBottomBar from "./RentalsBottomBar";
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer from "react-native-swipe-gestures";

export default function Rentals() {
  return (
    <>
      <Back />
      <Map />
      <RentalsBottomBar />
    </>
  );
}

function Back() {
  let navigation = useNavigation();
  return (
    <IconButton
      onPress={() => {
        navigation.goBack();
      }}
      bg="white"
      position="relative"
      borderRadius={50}
      size="xs"
      mt={5}
      p={3}
      pb={2}
      ml={3}
      width="11%"
      icon={
        <Icon viewBox="0 0 492 400" color="black">
          <Path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z"></Path>
        </Icon>
      }
    ></IconButton>
  );
}
