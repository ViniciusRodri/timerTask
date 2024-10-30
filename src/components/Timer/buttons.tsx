import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface ButtonProps {
  type: string;
  onPress: () => void;
}

export function ButtonActionTimer({ type, onPress }: ButtonProps) {
  return (
    <View className="flex flex-col gap-3 items-center">
      <TouchableOpacity
        activeOpacity={0.7}
        className="rounded-full bg-purpleLight w-14 h-14 items-center justify-center"
        onPress={onPress}
      >
        <FontAwesome5
          name={type === "pause" ? "pause" : type === "play" ? "play" : "stop"}
          size={16}
          color="#BDBDBD"
        />
      </TouchableOpacity>
      <Text className="font-rubikLight text-lg text-left text-black">
        {type === "pause" ? "Pause" : type === "play" ? "Play" : "Stop"}
      </Text>
    </View>
  );
}
