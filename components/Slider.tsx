// import React from "react";
// import { View, StyleSheet } from "react-native";
// import Animated, {
//   useAnimatedScrollHandler,
//   useSharedValue,
// } from "react-native-reanimated";
// import { ImageSliderType } from "@/app/data/SliderData";
// import SliderItem from "./SliderItem";

// type Props = {
//   itemList: ImageSliderType[];
// };

// const ITEM_WIDTH = 120; // Must match SliderItem width
// const SPACING = 20; // Space between items
// const VISIBLE_ITEMS = 3; // Number of items visible at once

// const Slider: React.FC<Props> = ({ itemList }) => {
//   const scrollX = useSharedValue(ITEM_WIDTH + SPACING); // Start at the position of the second item

//   const onScrollHandler = useAnimatedScrollHandler({
//     onScroll: (event) => {
//       scrollX.value = event.contentOffset.x; // Update scroll position
//     },
//   });

//   return (
//     <View style={styles.container}>
//       {/* <Animated.FlatList
//         data={itemList}
//         renderItem={({ item, index }) => (
//           <SliderItem item={item} index={index} scrollX={scrollX} />
//         )}
//         horizontal
//         keyExtractor={(item, index) => `${item.title}-${index}`} // Fix for unique key warning
//         contentContainerStyle={{
//           paddingHorizontal: (ITEM_WIDTH + SPACING) * (VISIBLE_ITEMS / 2 - 0.3),
//         }}
//         showsHorizontalScrollIndicator={false}
//         decelerationRate="fast"
//         snapToInterval={ITEM_WIDTH + SPACING} // Snap items to their positions
//         initialScrollIndex={1} // Start at the second item
//         getItemLayout={(data, index) => ({
//           length: ITEM_WIDTH + SPACING,
//           offset: (ITEM_WIDTH + SPACING) * index,
//           index,
//         })} // Optimize performance for large lists
//         onScroll={onScrollHandler}
//         scrollEventThrottle={16}
//       /> */}

//       <Animated.FlatList
//         data={itemList}
//         renderItem={({ item, index }) => (
//           <SliderItem item={item} index={index} scrollX={scrollX} />
//         )}
//         horizontal
//         // Remove or reduce padding to zero so items align with edges
//         contentContainerStyle={{ paddingHorizontal: 10 }}
//         showsHorizontalScrollIndicator={false}
//         bounces={true} // Prevents overscroll bounce
//         alwaysBounceHorizontal={true} // Disables horizontal bounce
//         overScrollMode="never" // Disables Android overscroll
//         snapToInterval={ITEM_WIDTH + SPACING}
//         snapToAlignment="start"
//         decelerationRate="fast"
//         onScroll={onScrollHandler}
//         scrollEventThrottle={16}
//       />
//     </View>
//   );
// };

// export default Slider;

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     bottom: 20,
//     overflow: "visible",
//     width: "100%",
//     height: 200,
//     borderWidth: 3,
//     borderColor: "red",
//   },
// });

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import SliderItem from "./SliderItem";
import { ImageSliderType } from "@/app/data/SliderData";

const screenWidth = Dimensions.get("window").width;

// Item and spacing sizes
const ITEM_WIDTH = 120; // Must match SliderItem width
const SPACING = 20; // Space between items
const VISIBLE_ITEMS = 3; // Number of items visible at once

type Props = {
  itemList: ImageSliderType[];
};

const Slider: React.FC<Props> = ({ itemList }) => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x; // Update scroll position
    },
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={itemList}
        horizontal
        showsHorizontalScrollIndicator={false}
        // Snap to each item
        snapToInterval={ITEM_WIDTH + SPACING}
        snapToAlignment="start"
        decelerationRate="fast"
        // Start scrolling with the second item centered
        initialScrollIndex={1} // Make second item the center item initially
        contentContainerStyle={{
          paddingHorizontal: (screenWidth - ITEM_WIDTH) / 2.15, // Center items
        }}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        // Inform FlatList about item dimensions
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH + SPACING,
          offset: (ITEM_WIDTH + SPACING) * index,
          index,
        })}
        // Handle scroll-to-index failures
        onScrollToIndexFailed={(info) => {
          console.warn("Scroll to index failed", info);
        }}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    height: 200,
  },
});
