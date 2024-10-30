import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Tag from "../components/Cards/tags";
import Title from "../components/Header/title";
import Constants from "expo-constants";
import { Link } from "expo-router";
import { TimerCountdown } from "../components/Timer";
import { ButtonActionTimer } from "../components/Timer/buttons";

const statusBarHeight = Constants.statusBarHeight;

export default function Timer() {
  const [isPaused, setIsPaused] = useState(true); // Timer starts in paused state
  const [reset, setReset] = useState(false);

  const handlePause = () => setIsPaused((prev) => !prev); // Toggle pause state
  const handleStop = () => {
    setIsPaused(true);
    setReset(true);
    setTimeout(() => setReset(false), 100);
  };

  return (
    <View
      className="flex flex-col px-4 gap-14"
      style={{ marginTop: statusBarHeight + 40 }}
    >
      {/* Header */}
      <View className="flex flex-row justify-around items-center">
        <Link push href="/" asChild>
          <TouchableOpacity activeOpacity={0.7}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        </Link>
        <View className="flex flex-1 items-center">
          <Title title={"Rasion Project"} />
        </View>
        <Tag text="Work" textColor="text-pink" color="bg-pinkLight" />
      </View>
      {/* Info */}
      <View className="flex gap-2 flex-row justify-center items-center pt-2">
        <Image source={require("../../assets/icons/Ellipse.png")} />
        <Text className="font-rubikRegular text-rubikRegular text-black">
          UI Design
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center gap-14">
        <TimerCountdown isPaused={isPaused} reset={reset} />
        <View className="flex flex-row gap-24">
          <ButtonActionTimer
            type={isPaused ? "play" : "pause"}
            onPress={handlePause}
          />
          <ButtonActionTimer type="stop" onPress={handleStop} />
        </View>
      </View>
    </View>
  );
}
