import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Constants from "expo-constants";
import Title from "../components/Header/title";
import { Input } from "../components/Inputs/Input";
import Select from "../components/Inputs/Input/select";
import { TextArea } from "../components/Inputs/Input/textArea";
import { MainButton } from "../components/Buttons";

const statusBarHeight = Constants.statusBarHeight;

export default function Stats() {
  return (
    <ScrollView>
      <View
        className="flex flex-col bg-white gap-5 h-full px-4"
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
            <Title title={"Create new task"} />
          </View>
        </View>
        {/* Content */}
        <View className="flex flex-col">
          <Input label="Title" placeholder="Crie um título para sua task!" />
          <Select label="Categories" create="Create new categories" />
          <Select label="Tags" create="Create new tags" />
          <TextArea
            label="Description"
            placeholder="Crie uma descrição para sua task..."
          />
        </View>
        <View className="flex flex-col items-center gap-2 px-2">
          <MainButton background="lightPurple" label="Save" confirm shadow />
          <MainButton label="Cancel" />
        </View>
      </View>
    </ScrollView>
  );
}
