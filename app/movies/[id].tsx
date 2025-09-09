import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  ImageBackground,
  FlatList,
  Linking,
  TouchableOpacity,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import useFetch from "@/services/useFetch";
import { fetchMovieDetails } from "@/services/api";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const formatRuntime = (runtime: number) => {
  if (runtime >= 60) {
    return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
  }
  return `${runtime}m`;
};

const formatVoteCount = (count: number) => {
  if (count >= 1000) {
    return `${Math.floor(count / 1000)}k`;
  }
  return `${count}`;
};

const formatMoney = (money: number) => {
  if (money >= 1000000) {
    return `$${Math.floor(money / 1000000)}m`;
  }
  return `$${money}`;
};

interface MovieProps {
  title: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  overview: string;
  status: string;
  genres: Array<{ id: string; name: string }>;
  revenue: number;
  budget: number;
  tagline: string;
  homepage: string;
}

const MovieInfo = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) => {
  return (
    <View className={className}>
      <Text className="text-xl text-gray-400 font-dmsans">{label}</Text>
      <Text className="font-dmsans text-light-100">{value}</Text>
    </View>
  );
};

const MovieInformation = (props: MovieProps) => {
  const {
    title,
    release_date,
    runtime,
    vote_average,
    vote_count,
    overview,
    status,
    genres,
    revenue,
    budget,
    tagline,
    homepage,
  } = props;

  const date = new Date(Date.parse(release_date));

  return (
    <View className="flex-1 px-4 pt-6">
      <Text className="text-3xl font-semibold text-white font-dmsans">
        {title}
      </Text>

      {/* small details */}

      <View>
        <Text className="my-3 text-sm font-semibold font-dmsans text-light-200">
          {release_date.split("-")[0]} • {formatRuntime(runtime)}
        </Text>
      </View>

      <View className="h-10 max-w-[110px] container card justify-center gap-1">
        <Image source={icons.star} className="w-5 h-5" />
        <Text className="text-sm font-bold text-white ">
          {vote_average.toPrecision(2)}
          <Text className="text-gray-400">{`/10 (${formatVoteCount(vote_count)})`}</Text>
        </Text>
      </View>

      <MovieInfo label="Overview:" value={overview} className="mt-4" />

      <View className="container w-full mt-4">
        <MovieInfo
          label="Release date:"
          value={date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          className="w-[50%]"
        />

        <MovieInfo
          label="Status:"
          value={status}
          className="w-[50%]"
        ></MovieInfo>
      </View>

      <View className="mt-4">
        <Text className="text-gray-400">Genres:</Text>

        {/* render genres here */}
        <FlatList
          data={genres}
          horizontal={true}
          renderItem={({ item }) => (
            <View className="mr-2 card">
              <Text className="text-white">{item.name}</Text>
            </View>
          )}
          className="mt-2"
        />
      </View>

      <View className="container w-full mt-4">
        <MovieInfo
          label="Budget:"
          value={formatMoney(budget)}
          className="w-[50%]"
        />
        <MovieInfo
          label="Revenue:"
          value={formatMoney(revenue)}
          className="w-[50%]"
        />
      </View>

      <MovieInfo label="Tagline:" value={tagline} className="mt-4" />

      {/* link to homepage */}
      <TouchableOpacity
        className="w-full h-10 mt-4 overflow-hidden"
        onPress={() => Linking.openURL(homepage)}
      >
        <View className="flex-row items-center justify-center w-full h-10 overflow-hidden bg-accent">
          <Text className="font-semibold text-md">Visit Homepage</Text>
          <Image
            source={icons.arrow}
            className="ml-1 size-5"
            tintColor={"black"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const {
    data: movie,
    loading,
    error,
  } = useFetch(() => fetchMovieDetails(id as string), true);

  console.log(movie);
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-primary">
        {loading && !movie ? (
          <ActivityIndicator color={"blue"} size={"large"} />
        ) : !movie ? (
          <Text>No movie found!</Text>
        ) : (
          <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
            <ImageBackground
              source={{
                uri: `https://images.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
              className="w-full h-[550px] border-2  rounded-xl "
              resizeMode="stretch"
            >
              <TouchableOpacity className="absolute z-20 flex items-center justify-center p-4 bg-white rounded-full -bottom-8 right-8">
                <Image source={icons.play} className="size-8" />
              </TouchableOpacity>
            </ImageBackground>
            <MovieInformation {...movie} />
          </ScrollView>
        )}
      </View>
    </SafeAreaProvider>
  );
};

export default MovieDetails;
