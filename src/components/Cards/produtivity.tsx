import React from "react";
import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CardProdProps {
  taskCount?: string;
  timeCount?: string;
  type?: string;
}

export default function CardProd({
  taskCount,
  timeCount,
  type = "clock",
}: CardProdProps) {
  return (
    <View className="flex flex-col p-4 w-40 gap-4 mx-auto bg-white rounded-xl drop-shadow-sm justify-center items-start">
      <View className="flex flex-row items-center gap-4">
        {type === "task" ? (
          <View className="rounded-lg bg-green w-8 h-8 items-center justify-center">
            <Feather name="check" size={20} color="white" />
          </View>
        ) : (
          <View className="rounded-lg bg-blue w-8 h-8 items-center justify-center">
            <Ionicons name="stopwatch-outline" size={20} color="white" />
          </View>
        )}
        <View className="flex flex-row">
          <Text className="font-rubikMedium text-base text-left text-black">
            {type === "task" ? (
              <>Task{"\n"}Completed</>
            ) : (
              <>Time{"\n"}Duration</>
            )}
          </Text>
        </View>
      </View>
      {type === "task" ? (
        <Text className="font-rubikSemiBold text-4xl text-left text-black">
          12
        </Text>
      ) : (
        <View className="flex flex-row items-baseline text-left">
          <Text className="font-rubikSemiBold text-4xl text-black">1</Text>
          <Text className="font-rubikRegular text-base text-gray">h</Text>
          <Text className="font-rubikSemiBold text-4xl text-black">46</Text>
          <Text className="font-rubikRegular text-base text-gray">m</Text>
        </View>
      )}
    </View>
  );
}
