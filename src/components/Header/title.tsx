import React from "react";
import { View, Text } from "react-native";

interface TitleProps {
  title: string;
  description?: string;
}

export default function Title({ title, description }: TitleProps) {
  return (
    <>
      <Text className="font-rubikSemiBold text-2xl text-left  text-black">
        {title}
      </Text>
      {description ? <Text className="text-black">{description}</Text> : ""}
    </>
  );
}
