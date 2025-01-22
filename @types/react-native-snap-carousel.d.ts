declare module "react-native-snap-carousel" {
  import { Component } from "react";
  import { FlatListProps, StyleProp, ViewStyle } from "react-native";

  export interface CarouselProps<T> extends FlatListProps<T> {
    itemWidth: number;
    sliderWidth: number;
    style?: StyleProp<ViewStyle>;
    renderItem: (info: { item: T; index: number }) => JSX.Element;
    data: T[];
  }

  export default class Carousel<T> extends Component<CarouselProps<T>> {}
}
