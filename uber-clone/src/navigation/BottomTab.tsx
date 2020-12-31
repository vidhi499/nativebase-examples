import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Rentals from "../screens/Rentals";
import Map from "../screens/Map";
import { Box, Icon, Path } from "native-base";
import Ride from "../screens/Ride";
import { createStackNavigator } from "@react-navigation/stack";
import ChooseDestination from "../components/ChooseDestination";

export default function BottomTab() {
  const BottomTab = createStackNavigator();

  return (
    <BottomTab.Navigator headerMode="none">
      <BottomTab.Screen name="Ride" component={Ride} />
      <BottomTab.Screen name="Rentals" component={Rentals} />
      <BottomTab.Screen name="WhereTo" component={ChooseDestination} />
    </BottomTab.Navigator>
  );
}
