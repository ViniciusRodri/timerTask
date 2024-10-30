import { Dimensions, StyleSheet } from "react-native";

const DIMENSIONS = Dimensions.get("window").width;
export const SHEET_HEIGHT = 220;
export const SHEET_OVER_DRAG = 250;

export const styles = StyleSheet.create({
  container: {
    height: SHEET_HEIGHT,
    width: DIMENSIONS,
    // bottom: -SHEET_OVER_DRAG * 1.3,
  },
});
