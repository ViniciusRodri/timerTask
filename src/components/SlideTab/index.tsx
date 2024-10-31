import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Chart } from "../Chart";

const { width } = Dimensions.get("window");

export function SlideTab() {
  const [active, setActive] = useState(0);
  let xTabOne = useRef(0).current;
  let xTabTwo = useRef(0).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateXTabOne = useRef(new Animated.Value(0)).current;
  const translateXTabTwo = useRef(new Animated.Value(width)).current;
  const [translateY, setTranslateY] = useState(-1000);

  const handleSlide = (type: number) => {
    Animated.spring(translateX, {
      toValue: type,
      useNativeDriver: true,
    }).start();

    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          useNativeDriver: true,
        }),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  return (
    <View className="flex-1">
      <View className="w-full justify-center items-center">
        <View className=" w-[279px] flex-row mt-10 mb-5 relative h-14 bg-purpleLight p-2 rounded-xl">
          <Animated.View
            className="absolute w-1/2 h-full top-0 left-0"
            style={{
              transform: [{ translateX }],
            }}
          />
          <TouchableOpacity
            className={`flex-1 justify-center items-center rounded-lg ${
              active === 0 ? "bg-white" : ""
            }`}
            onLayout={(event) => {
              xTabOne = event.nativeEvent.layout.x;
            }}
            onPress={() => {
              setActive(0);
              handleSlide(xTabOne);
            }}
          >
            <Text
              className={`font-rubikMedium text-base text-left ${
                active === 0 ? "text-black" : "text-lightBlack"
              }`}
            >
              Day
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 justify-center items-center rounded-lg ${
              active === 1 ? "bg-white" : ""
            }`}
            onLayout={(event) => {
              xTabTwo = event.nativeEvent.layout.x;
            }}
            onPress={() => {
              setActive(1);
              handleSlide(xTabTwo);
            }}
          >
            <Text
              className={`font-rubikMedium text-base text-left ${
                active === 0 ? "text-black" : "text-lightBlack"
              }`}
            >
              Week
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Animated.View
            className="justify-center items-center"
            style={{
              transform: [{ translateX: translateXTabOne }],
            }}
            onLayout={(event) => setTranslateY(event.nativeEvent.layout.height)}
          >
            <Chart />
          </Animated.View>
          <Animated.View
            className="justify-center items-center"
            style={{
              transform: [
                { translateX: translateXTabTwo },
                { translateY: -translateY },
              ],
            }}
          >
            <Text className="text-black">Hi, I am a cute dog</Text>
          </Animated.View>
        </ScrollView>
      </View>
    </View>
  );
}
