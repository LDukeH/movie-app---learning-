import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constants/images";

const TrendingCard = ({ movie, index }: { movie: any; index: number }) => {
  const { title, poster_url, movie_id } = movie;
  return (
    <Link href={`/movies/${movie_id.toString()}`} asChild>
      <TouchableOpacity activeOpacity={0.7} className="relative w-32 mx-4">
        <Image
          source={{
            uri: poster_url,
          }}
          className="w-32 rounded-lg h-52"
          resizeMode="cover"
        />

        {/* movie information */}
        <View>
          <Text
            className="self-center mt-2 text-sm font-bold text-accent"
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>

        <View className="absolute bottom-5 -left-4">
          <MaskedView
            maskElement={
              <Text className="text-6xl text-white">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            ></Image>
          </MaskedView>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
