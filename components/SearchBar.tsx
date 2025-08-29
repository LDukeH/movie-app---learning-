import { View, Text, Image, TextInput } from "react-native";
import React from "react";

import { icons } from "@/constants/icons";

const SearchBar = () => {
  return (
    <View className="w-full h-12 px-4 mt-6 ">
      <View className="flex flex-row items-center justify-start h-full px-4 rounded-full bg-dark-200">
        <Image source={icons.search} className="size-6" tintColor="#AB8BFF" />
        <TextInput
          className="flex-1 w-full h-full pl-4 pr-4"
          placeholder="Search through 300+ movies online"
          placeholderTextColor="#A8B5DB"
        />
      </View>
    </View>
  );
};

export default SearchBar;
