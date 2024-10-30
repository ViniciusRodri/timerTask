import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { G, Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  cancelAnimation,
} from "react-native-reanimated";

interface TimerProps {
  isPaused?: boolean;
  reset?: boolean;
}

const { width } = Dimensions.get("window");
const TIMER_DURATION = 300;
const RADIUS = width / 4;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function formatTime(seconds: any) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function TimerCountdown({ isPaused, reset }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(TIMER_DURATION);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCUMFERENCE * (1 - progress.value),
  }));

  useEffect(() => {
    if (reset) {
      setRemainingTime(TIMER_DURATION);
      progress.value = 0;
      if (intervalId) clearInterval(intervalId);
    }
  }, [reset]);

  useEffect(() => {
    if (isPaused) {
      if (intervalId) clearInterval(intervalId);
      cancelAnimation(progress);
    } else {
      const newIntervalId = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev > 0) {
            progress.value = (TIMER_DURATION - prev + 1) / TIMER_DURATION;
            return prev - 1;
          } else {
            if (intervalId) clearInterval(intervalId);
            return 0;
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPaused]);

  return (
    <View style={styles.container}>
      <Svg
        width={RADIUS * 2 + 40}
        height={RADIUS * 2 + 40}
        viewBox={`0 0 ${RADIUS * 2 + 40} ${RADIUS * 2 + 40}`}
      >
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="100%" stopColor="#9B51E0" />
            <Stop offset="1%" stopColor="#FFEFF1" />
          </LinearGradient>
        </Defs>
        <G rotation="-90" origin={`${RADIUS + 20}, ${RADIUS + 20}`}>
          <Circle
            cx={RADIUS + 20}
            cy={RADIUS + 20}
            r={RADIUS}
            stroke="#E9E9FF"
            strokeWidth="16"
            fill="none"
          />
          <AnimatedCircle
            cx={RADIUS + 20}
            cy={RADIUS + 20}
            r={RADIUS}
            stroke="url(#grad)"
            strokeWidth="16"
            fill="none"
            strokeDasharray={CIRCUMFERENCE}
            animatedProps={animatedProps}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <View style={styles.timerTextContainer}>
        <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  timerTextContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    fontSize: 40,
    color: "#000",
  },
});
