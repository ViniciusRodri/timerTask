import React, { useMemo, useRef, useCallback, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Title from "../components/Header/title";
import Constants from "expo-constants";
import Entypo from "@expo/vector-icons/Entypo";
import CardTimer from "../components/Cards/timer";
import TaskCard from "../components/Cards/task";
import BottomMenu from "../components/Footer";
import { BottomSheet } from "../components/BottomSheet";
import { Link } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const [openSheet, setOpenSheet] = useState(false);

  const handleOpenSheet = () => {
    setOpenSheet((prev) => !prev);
  };

  return (
    <View className="flex flex-col bg-lightGray gap-5">
      <View
        className="flex flex-row items-center justify-between px-4"
        style={{ marginTop: statusBarHeight + 40 }}
      >
        <Title title={"Task"} />
        <Pressable>
          <Entypo name="dots-three-horizontal" size={22} color="gray" />
        </Pressable>
      </View>
      <View className="items-center justify-center px-4">
        <CardTimer title="00:32:10" description="Task Importante!!!" />
      </View>
      <View className="flex flex-row items-center justify-between pt-3 px-4">
        <Title title={"Today"} />
        <Pressable>
          <Text className="font-rubikRegular text-lg text-left text-black">
            See All
          </Text>
        </Pressable>
      </View>
      <View className="px-4 gap-2">
        <TaskCard title="Olá" />
        <TaskCard title="Olá" />
        <TaskCard title="Olá" />
      </View>
      <View>
        <BottomMenu onPressPlus={handleOpenSheet} />
      </View>
    </View>
  );
}
