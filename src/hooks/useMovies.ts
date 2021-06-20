import {useEffect, useState, Dispatch, SetStateAction} from "react";
import {Movie} from "@src/components/type";
import {axiosInstance} from "@src/helper";
import {requests} from '@src/configs';

type useMoviesType = (
  fetchUrl: typeof requests[keyof typeof requests]
) => {
  movies: Movie[],
  movie: Movie,
  setMovies: Dispatch<SetStateAction<Movie[]>>
}

export const useMovies: useMoviesType = (fetchUrl) => {
  //動画の情報が入った配列
  const [movies, setMovies] = useState<Movie[]>([]);
  //動画の情報が入った配列からランダムに一つ返した値
  const [movie, setMovie] = useState<Movie>({
    id: '',
    name: '',
    title: '',
    original_name: '',
    poster_path: '',
    backdrop_path: '',
    overview: '',
  });

  //moviesのdataを取得する
  useEffect(() => {
    (async () => {
      const request = await axiosInstance.get(fetchUrl);
      //TODO asをなくす
      const results = request.data.results as Movie[];
      setMovies(results);
      //ランダムの部分は切り出し
      setMovie(results[Math.floor(Math.random() * results.length - 1)])
    })();
  }, [fetchUrl]);

  return {
    movies,
    movie,
    setMovies
  }
}
