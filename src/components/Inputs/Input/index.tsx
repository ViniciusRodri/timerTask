import { Text, TextInput, View } from "react-native";

interface InputProps {
  label: string;
  placeholder: string;
}

export function Input({ label, placeholder }: InputProps) {
  return (
    <View className="flex flex-col gap-1 p-2">
      <Text className="font-rubikRegular text-base text-left text-dark">
        {label}*
      </Text>
      <TextInput
        autoFocus={true}
        className="font-rubikRegular bg-input rounded drop-shadow-sm p-2.5"
        placeholder={placeholder}
      />
    </View>
  );
}
