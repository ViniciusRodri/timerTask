import React from "react";
import { View, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { Link } from "expo-router";

interface BottomMenuProps {
  onPressPlus?: () => void;
}

export default function BottomMenu({ onPressPlus }: BottomMenuProps) {
  return (
    <View style={[styles.container]}>
      <Link push href="/timer" asChild>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressPlus}>
          <FontAwesome6 name="clock" size={24} color="gray" />
        </TouchableOpacity>
      </Link>
      <Link push href="/newTask" asChild>
        <TouchableOpacity activeOpacity={0.7}>
          <View
            style={{
              backgroundColor: "#000",
              borderRadius: 50,
              width: 56,
              height: 56,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="plus" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </Link>
      <Link push href="/stats" asChild>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="pie-chart-outline" size={28} color="gray" />
        </TouchableOpacity>
      </Link>
    </View>
  );
}
