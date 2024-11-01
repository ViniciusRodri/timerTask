import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

interface Item {
  id: string;
  name: string;
  icon: any;
}

const items: Item[] = [
  { id: "1", name: "Work", icon: "work" },
  { id: "2", name: "Gym", icon: "study" },
  { id: "3", name: "Study", icon: "study" },
  { id: "4", name: "Read", icon: "read" },
];

interface SelectProps {
  label: string;
}

export default function Select({ label }: SelectProps) {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelectItem = (item: Item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    }
  };

  const handleInputFocus = () => {
    setDropdownVisible(true);
  };

  return (
    <View className="flex flex-col gap-1 p-2">
      <Text className="font-rubikRegular text-base text-left text-dark">
        {label}*
      </Text>
      <View className="flex">
        <View
          className="font-rubikRegular bg-input rounded drop-shadow-sm p-2.5"
          style={{ flexDirection: "row", flexWrap: "wrap" }}
          onTouchStart={handleInputFocus}
        >
          {selectedItems.map((item, index) => (
            <View
              key={index}
              className="bg-purple rounded-full px-3 py-1 mr-2 flex flex-row items-center"
            >
              <Text className="text-white mr-1">{item.name}</Text>
              <TouchableOpacity onPress={() => handleSelectItem(item)}>
                <Feather name="x" size={16} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      {dropdownVisible && (
        <View className="border border-lightGray  mt-1  max-h-60 font-rubikRegular bg-input rounded drop-shadow-sm p-2.5">
          <ScrollView>
            {items.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="p-2 border-b border-lightGray"
                onPress={() => {
                  handleSelectItem(item);
                  setDropdownVisible(false);
                }}
              >
                <Text
                  className={
                    selectedItems.includes(item) ? "text-purple" : "text-black"
                  }
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
