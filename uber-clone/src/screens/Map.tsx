import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import BottomBar from "./BottomBar";
import AppNavigator from "../../../swiggy-clone/src/navigation/AppNavigator";
import { Box, Icon, IconButton, Path } from "native-base";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function Map() {
  const [location, setLocation] = React.useState({});
  const [errorMsg, setErrorMsg] = React.useState("");

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const onRegionChangeComplete = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  return (
    <>
      <HamBurger />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.7333,
          longitude: 76.7794,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        provider="google"
        onRegionChangeComplete={onRegionChangeComplete}
      ></MapView>

      <BottomBar />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "45%",
    zIndex: -1,
    position: "absolute",
  },
});

function HamBurger() {
  let navigation = useNavigation();
  return (
    <IconButton
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
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
        <Icon viewBox="0 0 512 512" mt={1} color="black">
          <Path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />
          <Path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z" />
          <Path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20    C512,404.954,503.046,396,492,396z" />
        </Icon>
      }
    ></IconButton>
  );
}
