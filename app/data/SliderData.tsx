import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  desctiption: string;
};

export const ImageSlider = [
  {
    title: "first tile",
    image: require("@/assets/images/1.png"),
    description: " description A",
  },
  {
    title: "second tile",
    image: require("@/assets/images/2.png"),
    description: "some description B",
  },
  {
    title: "third tile",
    image: require("@/assets/images/3.png"),
    description: "some description C",
  },
  {
    title: "forth tile",
    image: require("@/assets/images/4.png"),
    description: "some description D",
  },
  {
    title: "fifthe tile",
    image: require("@/assets/images/2.png"),
    description: "some description B",
  },
];

export default ImageSlider;
