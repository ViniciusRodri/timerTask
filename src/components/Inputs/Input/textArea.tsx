import { Text, TextInput, View } from "react-native";

interface InputProps {
  label: string;
  placeholder: string;
  onBlur: any;
  onChange: () => void;
  value: string;
}

export function TextArea({
  label,
  placeholder,
  onBlur,
  onChange,
  value,
}: InputProps) {
  return (
    <View className="flex flex-col gap-1 p-2">
      <Text className="font-rubikRegular text-base text-left text-dark">
        {label}*
      </Text>
      <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={{ textAlignVertical: "top" }}
        multiline={true}
        numberOfLines={8}
        className="font-rubikRegular bg-input rounded drop-shadow-sm p-2.5"
        placeholder={placeholder}
      />
    </View>
  );
}
