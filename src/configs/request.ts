export const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&languager=en-us`,
  fetchActionMovies: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentMovies: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=99`,
} as const;

//画像のベースurl
export const baseURL = 'https://image.tmdb.org/t/p/original' as const;
