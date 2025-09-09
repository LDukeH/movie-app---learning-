export const fetchMovie = async ({ query }: { query: string }) => {
  const encodedQuery = encodeURIComponent(query.trim());
  const endpoint = query
    ? `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&query=${encodedQuery}`
    : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API}`,
    },
  });
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (id: string) => {
  try {
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
