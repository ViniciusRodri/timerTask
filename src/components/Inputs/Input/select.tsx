import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import work from "../../../../assets/icons/iconsWhite/code-slash.png";
import gym from "../../../../assets/icons/iconsWhite/barbell.png";
import study from "../../../../assets/icons/iconsWhite/barbell.png";
import read from "../../../../assets/icons/iconsWhite/desktop.png";

interface Item {
  id: string;
  name: string;
  icon: any;
  color: string;
}

const items: Item[] = [
  { id: "1", name: "Work", icon: work, color: "#3D4ABA" },
  { id: "2", name: "Gym", icon: gym, color: "#07E092" },
  { id: "3", name: "Study", icon: study, color: "#070417" },
  { id: "4", name: "Read", icon: read, color: "#FD5B71" },
];

interface SelectProps {
  label: string;
  create: string;
}

export default function Select({ label, create }: SelectProps) {
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
    setDropdownVisible((prev) => !prev);
  };

  return (
    <View className="flex flex-col gap-1 p-2">
      <Text className="font-rubikRegular text-base text-left text-dark">
        {label}*
      </Text>
      <View className="flex">
        <View
          className=" font-rubikRegular bg-input min-h-11 rounded drop-shadow-sm p-2.5 items-center justify-between"
          style={{ flexDirection: "row", flexWrap: "wrap" }}
          onTouchStart={handleInputFocus}
        >
          {selectedItems.length === 0 && (
            <Text className="font-rubikRegular text-lightBlack text-base text-left">
              Selecione as categorias...
            </Text>
          )}
          {selectedItems.map((item, index) => (
            <View
              key={index}
              className="bg-purple rounded-full px-3 py-1 mr-2 flex flex-row items-center"
            >
              <Text className="text-white mr-1">{item.name}ds</Text>
              <TouchableOpacity onPress={() => handleSelectItem(item)}>
                <Feather name="x" size={16} color="white" />
              </TouchableOpacity>
            </View>
          ))}
          <View className="items-center justify-end ">
            {dropdownVisible ? (
              <AntDesign name="caretup" size={13} color="#8f8da2" />
            ) : (
              <AntDesign name="caretdown" size={13} color="#8f8da2" />
            )}
          </View>
        </View>
      </View>
      {dropdownVisible && (
        <View className="border border-lightGray  mt-1  max-h-60 font-rubikRegular bg-input rounded drop-shadow-sm p-2.5">
          <ScrollView>
            {items.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="flex flex-row gap-1.5 items-center p-2 border-b border-lightGray"
                onPress={() => {
                  handleSelectItem(item);
                  setDropdownVisible(false);
                }}
              >
                <View
                  className="rounded-full p-1 items-center justify-center"
                  style={{
                    backgroundColor: `${item.color}`,
                  }}
                >
                  <Image source={item.icon} className="size-4" />
                </View>

                <Text
                  className={`font-rubikRegular text-dark text-base text-left ${
                    selectedItems.includes(item) ? "text-purple" : "text-dark"
                  }`}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      <TouchableOpacity>
        <Text className="text-blue text-sm">{create}</Text>
      </TouchableOpacity>
    </View>
  );
}
