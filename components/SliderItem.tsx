// import React from "react";
// import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
// import Animated, {
//   useAnimatedStyle,
//   interpolate,
//   Extrapolation,
//   SharedValue,
// } from "react-native-reanimated";

// import { ImageSliderType } from "@/app/data/SliderData";

// type Props = {
//   item: ImageSliderType;
//   index: number;
//   scrollX: SharedValue<number>;
// };

// const ITEM_WIDTH = 120; // Width of each item
// const SPACING = 10; // Space between items
// const CONTAINER_PADDING = 50; // Padding for the container

// const SliderItem = ({ item, index, scrollX }: Props) => {
//   const reanimatedStyle = useAnimatedStyle(() => {
//     const inputRange = [
//       (index - 1) * (ITEM_WIDTH + SPACING),
//       index * (ITEM_WIDTH + SPACING),
//       (index + 1) * (ITEM_WIDTH + SPACING),
//     ];

//     const scale = interpolate(
//       scrollX.value,
//       inputRange,
//       [0.7, 1.1, 0.7], // Adjust scale for side and center items
//       Extrapolation.CLAMP
//     );

//     return {
//       transform: [{ scale }],
//     };
//   });

//   return (
//     <Animated.View style={[styles.itemContainer, reanimatedStyle]}>
//       <Image
//         source={item.image}
//         style={{
//           width: ITEM_WIDTH,
//           height: 120,
//           borderRadius: 15,
//           backgroundColor: "transparent",
//           borderWidth: 3,
//           borderColor: "white",
//           shadowColor: "black",
//           shadowOffset: 50,
//           shadowRadius: 90,
//         }}
//       />
//       <Text style={styles.title}>{item.title}</Text>
//     </Animated.View>
//   );
// };

// export default SliderItem;

// const styles = StyleSheet.create({
//   itemContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: SPACING / 3,
//     borderWidth: 3,
//     borderColor: "blue",
//     // marginHorizontal: 10,

//     overflow: "visible", // Ensure the scaled item is fully visible
//   },
//   title: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//     marginTop: 10,
//   },
// });

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  SharedValue,
} from "react-native-reanimated";
import { ImageSliderType } from "@/app/data/SliderData";

type Props = {
  item: ImageSliderType;
  index: number;
  scrollX: SharedValue<number>;
};

// Item and spacing sizes
const ITEM_WIDTH = 120; // Must match Slider width
const SPACING = 20; // Space between items

const SliderItem = ({ item, index, scrollX }: Props) => {
  const reanimatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * (ITEM_WIDTH + SPACING),
      index * (ITEM_WIDTH + SPACING),
      (index + 1) * (ITEM_WIDTH + SPACING),
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1.2, 0.8], // Larger for the center item
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, reanimatedStyle]}>
      <Image
        source={item.image}
        style={{
          width: ITEM_WIDTH,
          height: 120,
          borderRadius: 15,
          backgroundColor: "transparent",
          borderWidth: 3,
          borderColor: "white",
          shadowColor: "#000", // Black shadow color
          shadowOffset: { width: 3, height: 4 }, // Slightly offset downwards
          shadowOpacity: 0.8, // Opacity of the shadow
          shadowRadius: 4, // Blur radius
          elevation: 4, // Elevation for Android shadows
        }}
      />
      {/* <Text style={styles.title}>{item.title}</Text> */}
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SPACING / 2, // Space between items
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    shadowColor: "#000", // Black shadow color
    shadowOffset: { width: 2, height: 4 }, // Slightly offset downwards
    shadowOpacity: 0.8, // Opacity of the shadow
    shadowRadius: 5, // Blur radius
    elevation: 5, // Elevation for Android shadows
  },
});
