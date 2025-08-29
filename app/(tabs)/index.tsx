import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

import SearchBar from "@/components/SearchBar";

const index = () => {
  return (
    <View className="relative items-start justify-start flex-1 bg-primary">
      {/* for background effect */}
      <Image source={images.bg} className="absolute z-0 w-full" />

      <ScrollView
        className="flex w-full h-full px-4 pt-16 pb-8 z-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 30, minHeight: "100%" }}
      >
        <Image source={icons.logo} className="w-12 h-12 mx-auto" />

        <View>
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
