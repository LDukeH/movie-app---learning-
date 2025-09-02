import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

import useFetch from "@/services/useFetch";
import { fetchMovie } from "@/services/api";
import { fetchTrendingMovie } from "@/services/appwrite";

import MovieCard from "@/components/MovieCard";
import TrendingCard from "@/components/TrendingCard";

const index = () => {
  const router = useRouter();

  const {
    data: movies,
    loading: isLoading,
    error: movieError,
  } = useFetch(() => fetchMovie({ query: "" }), true);

  const {
    data: trendingMovies,
    loading: trendLoading,
    error: trendError,
  } = useFetch(() => fetchTrendingMovie(), true);

  const onPress = () => {
    router.push("/search");
  };

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

        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : movieError ? (
          <Text className="text-red-500">Error: {movieError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              placeholder="Search through 300+ movies online"
              onPress={onPress}
            />

            <Text className="text-lg font-bold text-white">
              Trending Movies
            </Text>
            <>
              {trendLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : trendError ? (
                <Text className="text-red-500">
                  Error: {trendError?.message}
                </Text>
              ) : trendingMovies && trendingMovies.length === 0 ? (
                <Text className="text-white">No trending movies found</Text>
              ) : (
                <FlatList
                  data={trendingMovies}
                  renderItem={({ item, index }) => (
                    <TrendingCard movie={item} index={index} />
                  )}
                  horizontal={true}
                  scrollEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  className="pt-2 pb-8 "
                />
              )}
            </>

            <>
              <Text className="text-lg font-bold text-white">
                Latest movies
              </Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} />}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  flex: 1,
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                scrollEnabled={false}
                className="px-2 pb-32 mt-2"
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default index;
