import { Client, ID, TablesDB, Query } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_COLLECTION_ID;

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const tablesDB = new TablesDB(client);

import { Movie } from "@/interfaces/interfaces";

export const updateSearchCount = async ({
  query,
  movie,
}: {
  query: string;
  movie: Movie;
}) => {
  try {
    const result = await tablesDB.listRows(DATABASE_ID!, COLLECTION_ID!, [
      Query.equal("searchTerm", query),
    ]);

    if (result.rows.length > 0) {
      const existingMovie = result.rows[0];

      await tablesDB.updateRow(
        DATABASE_ID!,
        COLLECTION_ID!,
        existingMovie.$id,
        {
          count: existingMovie.count + 1,
        }
      );
    } else {
      await tablesDB.createRow(DATABASE_ID!, COLLECTION_ID!, ID.unique(), {
        searchTerm: query,
        movie_id: movie.id,
        count: 1,
        poster_url: `https://images.tmdb.org/t/p/w500${movie.poster_path}`,
        title: movie.title,
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};

export const fetchTrendingMovie = async () => {
  const result = await tablesDB.listRows(DATABASE_ID!, COLLECTION_ID!, [
    Query.orderDesc("count"),
    Query.limit(5),
  ]);
  const filteredResult = result.rows.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.title === movie.title)
  );
  return filteredResult;
};
