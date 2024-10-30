import { StyleSheet } from "react-native";

export const SHEET_OVER_DRAG = 18;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -SHEET_OVER_DRAG * 8.8,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
