import React from "react";
import { View, Text } from "react-native";

interface TagProps {
  text: string;
  color: string;
  textColor: string;
}

export default function Tag({ color, textColor, text }: TagProps) {
  return (
    <View
      className={`flex flex-row px-3 py-2 justify-between items-center mx-auto ${color} rounded-xl `}
    >
      <Text className={`${textColor} font-rubikRegular`}>{text}</Text>
    </View>
  );
}
