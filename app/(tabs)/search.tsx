import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import React from "react";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

import useFetch from "@/services/useFetch";
import { fetchMovie } from "@/services/api";

import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import { updateSearchCount } from "@/services/appwrite";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debounceQuery] = useDebounce(searchQuery, 1000);
  const {
    data: movies,
    loading: isLoading,
    error: movieError,
    refetch: fetchData,
    reset,
  } = useFetch(() => fetchMovie({ query: searchQuery }), false);

  useEffect(() => {
    const search = async () => {
      if (searchQuery) {
        await fetchData();
      } else {
        reset();
      }
    };

    search();
  }, [debounceQuery]);

  useEffect(() => {
    if (movies && movies.length > 0) {
      updateSearchCount({ query: searchQuery.trim(), movie: movies[0] });
    }
  }, [movies]);

  return (
    <View className="flex-1 pt-16 pb-8 bg-primary">
      <Image
        source={images.bg}
        className="absolute z-0 w-full"
        resizeMode="cover"
      />

      <Image source={icons.logo} className="w-12 h-12 mx-auto" />
      <View className="flex-1 mt-5">
        <SearchBar
          placeholder="Search for movies..."
          value={searchQuery ? searchQuery : ""}
          onChangeText={(text: string) => setSearchQuery(text)}
        />

        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={movies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          numColumns={3}
          className="px-5 mb-10"
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 16,
            marginVertical: 20,
          }}
          ListHeaderComponent={() =>
            searchQuery && (
              <View className="mt-2">
                {/* resolve search result */}
                {isLoading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : movieError ? (
                  <Text className="text-red-500">
                    Error: {movieError?.message}
                  </Text>
                ) : movies && movies.length === 0 ? (
                  <Text className="text-white">No results found</Text>
                ) : (
                  <Text className="text-white">
                    Result for "
                    <Text className="font-bold uppercase text-accent">
                      {searchQuery}
                    </Text>
                    " :
                  </Text>
                )}
              </View>
            )
          }
        />
      </View>
    </View>
  );
};

export default Search;
