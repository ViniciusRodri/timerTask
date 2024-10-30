import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

interface CardProps {
  title: string;
  description: string;
}

export default function CardTimer({ title, description }: CardProps) {
  return (
    <View className="p-5 w-full h-32 justify-center mx-auto bg-black rounded-xl shadow-lg grid gap-x-4">
      <View className=" flex flex-row justify-between">
        <Text className="font-rubikMedium text-4xl text-left  text-white">
          {title}
        </Text>
        <Pressable>
          <Entypo name="chevron-small-right" size={30} color="white" />
        </Pressable>
      </View>
      <View className="flex gap-2 flex-row items-center pt-2">
        <Image
          source={require("../../../assets/icons/Ellipse.png")}
          className="w-4"
        />
        <Text className="font-rubikRegular text-base text-white">
          {description}
        </Text>
      </View>
    </View>
  );
}
