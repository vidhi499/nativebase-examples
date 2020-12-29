import * as React from "react";
import MapView from "react-native-maps";
//import { MapView } from "expo";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { Box } from "native-base";

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
  return (
    <Box>
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
      />
      <Text>{text}</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: 400,
    height: 400,
  },
});
