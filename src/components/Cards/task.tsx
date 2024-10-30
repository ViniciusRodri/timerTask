import React from "react";
import { View, Text, Pressable } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import Tag from "./tags";

interface TaskCardProps {
  title: string;
  description?: string;
}

export default function TaskCard({ title, description }: TaskCardProps) {
  return (
    <View className="flex flex-row p-5 w-full h-24 gap-7 items-center mx-auto bg-white rounded-xl ">
      {/* Icon */}
      <View className="flex flex-col">
        <View className="rounded-full bg-purple w-14 h-14 items-center justify-center">
          <Ionicons name="desktop-outline" size={30} color="white" />
        </View>
      </View>

      {/* Middle */}
      <View className="flex flex-col justify-start items-start gap-2">
        <Text className=" font-rubikMedium text-base text-lightGrey">
          {title}
        </Text>
        <View className="flex flex-row gap-2 ">
          <Tag text="Work" textColor="text-pink" color="bg-pinkLight" />
          <Tag
            text="Rasion Project"
            textColor="text-purple"
            color="bg-purpleLight"
          />
        </View>
      </View>

      {/* Right */}
      <View className="flex flex-col gap-2 items-end">
        <Text className=" font-rubikRegular text-base text-gray">00:42:21</Text>
        <Pressable>
          <FontAwesome5 name="play" size={18} color="gray" />
        </Pressable>
      </View>
    </View>
  );
}
