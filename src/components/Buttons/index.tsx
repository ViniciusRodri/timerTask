import { Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";

interface InputProps {
  label: string;
  shadow?: boolean;
  background?: string;
  onPress?: () => void;
  confirm?: boolean;
}

export function MainButton({
  label,
  background,
  onPress,
  shadow,
  confirm,
}: InputProps) {
  return (
    <TouchableOpacity
      className={`bg-${
        background && confirm ? `green` : background ? background : ""
      } p-2 items-center justify-center h-14 w-full rounded ${
        shadow ? `shadow-sm` : ""
      }`}
      onPress={onPress}
    >
      <Text
        className={`${
          confirm ? `font-rubikMedium` : `rubikRegular`
        } text-base text-left text-dark`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
