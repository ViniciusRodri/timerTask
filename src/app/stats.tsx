import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Constants from "expo-constants";
import Title from "../components/Header/title";
import CardProd from "../components/Cards/produtivity";
import { SlideTab } from "../components/SlideTab";

const statusBarHeight = Constants.statusBarHeight;

export default function Stats() {
  return (
    <View
      className="flex flex-col bg-lightGray gap-5 h-full px-4"
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
          <Title title={"My Productivity"} />
        </View>
      </View>
      {/* Info */}
      <View className="flex flex-row">
        <CardProd type="task" />
        <CardProd />
      </View>

      <View className="flex flex-row items-center justify-center">
        <SlideTab />
      </View>
    </View>
  );
}
