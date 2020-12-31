import { Box } from "native-base";
import React from "react";
import Map from "./Map";
import BottomBar from "./BottomBar";
import RentalsBottomBar from "./RentalsBottomBar";
export default function Rentals() {
  return (
    <>
      <Map />
      <RentalsBottomBar />
    </>
  );
}
