// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { CameraView, Camera } from "expo-camera";

// export default function HomeScreen() {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return (
//       <View style={styles.container}>
//         <Text>Requesting camera permissions...</Text>
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
//       {/* Rendering CameraView without extra text */}
//       <CameraView style={{ flex: 1 }} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
// });

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";

export default function HomeScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [showCamera, setShowCamera] = useState(false);

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
        <Text style={styles.text}>Welcome to AR Sign App</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
