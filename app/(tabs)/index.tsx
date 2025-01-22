// import React, { useState } from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import { CameraView, Camera } from "expo-camera";

// import Carousel from "react-native-snap-carousel";
// import { Dimensions } from "react-native";
// import Slider from "@/components/Slider";

// export default function HomeScreen() {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const [showCamera, setShowCamera] = useState(false);
//   const { width: screenWidth } = Dimensions.get("window");

//   const requestCameraPermission = async () => {
//     const { status } = await Camera.requestCameraPermissionsAsync();
//     setHasPermission(status === "granted");
//     if (status === "granted") {
//       setShowCamera(true);
//     }
//   };

//   if (!showCamera) {
//     return (
//       <View style={styles.container}>
//         {/* <Slider /> */}
//         <Button title="Activate Camera" onPress={requestCameraPermission} />
//       </View>
//     );
//   }

//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text>No access to camera</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <CameraView style={{ flex: 1 }} />
//       <Slider style={styles.Innercontainer} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "blue",
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 20,
//   },

//   Innercontainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "transparent",
//   },
// });

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";

import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import Slider from "@/components/Slider";
import ImageSlider from "../data/SliderData";

export default function HomeScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const { width: screenWidth } = Dimensions.get("window");

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
    if (status === "granted") {
      setShowCamera(true);
    }
  };

  if (!showCamera) {
    return (
      <View style={styles.container}>
        <Button title="Activate Camera" onPress={requestCameraPermission} />
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} />
      <Slider itemList={ImageSlider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
