import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

import { Movie } from "@/interfaces/interfaces";

import { icons } from "@/constants/icons";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { title, poster_path, vote_average, release_date } = movie;
  return (
    <Link href={`/movies/${movie.id.toString()}`} asChild>
      <TouchableOpacity className="w-[30%]" activeOpacity={0.7}>
        <Image
          source={{
            uri: poster_path
              ? `https://images.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400",
          }}
          className="w-full rounded-lg h-52"
          resizeMode="cover"
        />

        {/* movie information */}
        <View>
          <Text className="text-sm text-white font-dmsans" numberOfLines={1}>
            {title}
          </Text>

          <View className="flex flex-row items-center gap-0.5">
            <Image source={icons.star} className="size-4" />
            <Text className="text-sm text-white">
              {(vote_average / 2).toPrecision(2)}
            </Text>
          </View>

          <Text className="text-xs text-gray-400 font-dmsans">
            {release_date.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
