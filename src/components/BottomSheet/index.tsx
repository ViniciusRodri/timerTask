import { StyleSheet } from "react-native";
import { Dimensions, Text, View } from "react-native";
import { Image } from "react-native";
import Animated, {
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { SHEET_HEIGHT, SHEET_OVER_DRAG, styles } from "./styles";

interface BottomSheetProps {
  onClose: () => void;
}

export function BottomSheet({ onClose }: BottomSheetProps) {
  function close() {
    offset.value = 0;
    onClose();
  }

  const offset = useSharedValue(0);
  const pan = Gesture.Pan()
    .onChange((e) => {
      const offsetDelta = e.changeY + offset.value;
      const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta);

      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < SHEET_HEIGHT / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(SHEET_HEIGHT, {}, () => {
          runOnJS(close)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[styles.container, translateY]}
        className="bg-black absolute inset-y-0 px-4 rounded-t-3xl"
        entering={SlideInDown.springify().damping(20)}
        exiting={SlideOutDown}
      >
        <View className="self-center mt-3">
          <Image
            source={require("../../../assets/icons/iconsWhite/drag.png")}
          />
        </View>
        <Text className="font-rubikRegular text-lg text-left text-white">
          Olá Marilene
        </Text>
      </Animated.View>
    </GestureDetector>
  );
}
