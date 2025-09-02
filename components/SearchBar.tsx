import { View, Text, Image, TextInput } from "react-native";
import React from "react";

import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View className="w-full h-12 px-2 mt-6 ">
      <View className="flex flex-row items-center justify-start h-full px-4 rounded-full bg-dark-200">
        <Image source={icons.search} className="size-6" tintColor="#AB8BFF" />
        <TextInput
          className="flex-1 w-full h-full pl-4 pr-4 text-white"
          placeholder={placeholder}
          placeholderTextColor="#A8B5DB"
          onPress={onPress}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
};

export default SearchBar;
