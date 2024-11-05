import { Link, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Constants from "expo-constants";
import Title from "../components/Header/title";
import { Input } from "../components/Inputs/Input";
import Select from "../components/Inputs/Input/select";
import { TextArea } from "../components/Inputs/Input/textArea";
import { MainButton } from "../components/Buttons";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";

interface DataProps {
  title: string;
  categories: string;
  tags: string;
  description: string;
}

const statusBarHeight = Constants.statusBarHeight;

export default function Stats() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    getValues,
    watch,
  } = useForm<DataProps>();

  const onSubmit: SubmitHandler<DataProps> = (data) => {
    console.log(data);
  };

  const handleBack = () => {
    router.push("/");
  };

  const defaultValues = {
    title: "",
    categories: "",
    tags: "",
    description: "",
  };

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
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Title"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                placeholder="Crie um título para sua task!"
              />
            )}
            name="title"
            rules={{ required: true }}
            defaultValue={defaultValues.title}
          />
          <Controller
            control={control}
            render={({ value }: any) => (
              <Select label="Categories" create="Create new categories" />
            )}
            name="categories"
            defaultValue={defaultValues.categories}
          />
          <Controller
            control={control}
            render={({ value }: any) => (
              <Select label="Tags" create="Create new tags" />
            )}
            name="tags"
            defaultValue={defaultValues.categories}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextArea
                label="Description"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                placeholder="Crie uma descrição para sua task..."
              />
            )}
            name="description"
            rules={{ required: true }}
            defaultValue={defaultValues.description}
          />
        </View>
        <View className="flex flex-col items-center gap-2 px-2">
          <MainButton
            background="lightPurple"
            label="Save"
            confirm
            shadow
            onPress={handleSubmit(onSubmit)}
          />
          <MainButton label="Cancel" onPress={handleBack} />
        </View>
      </View>
    </ScrollView>
  );
}
