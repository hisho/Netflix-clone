import { VFC, useState, useEffect } from 'react';
import { Movie } from '@src/components/type';
import { baseURL, requests } from '@src/configs';
import { axiosInstance } from '@src/helper';

type HeroPropsType = {};

export const Hero: VFC<HeroPropsType> = () => {
  //とりあえず初期値を入力しておく
  //TODO リファクタリング
  const [movie, setMovie] = useState<Movie>({
    id: '',
    name: '',
    title: '',
    original_name: '',
    poster_path: '',
    backdrop_path: '',
    overview: '',
  });

  //movieのdataを取得する
  //TODO hooksに切り出す
  useEffect(() => {
    (async () => {
      const request = await axiosInstance.get(requests.fetchNetflixOriginals);

      //TODO asをなくす
      const results = request.data.results as Movie[];
      //配列からランダムな値を一つ返す
      //TODO 関数切り出し
      const randomData =
        results[Math.floor(Math.random() * results.length - 1)];
      setMovie(randomData);
    })();
  }, []);

  return (
    <div className="h-96 relative overflow-hidden text-white">
      <img
        className="absolute inset-0 h-full object-cover object-center z-10"
        aria-hidden={true}
        src={`${baseURL}${movie.backdrop_path}`}
        alt=""
        decoding="async"
      />
      <div className="w-full h-full flex items-center relative z-20 backdrop-filter backdrop-blur-sm bg-black bg-opacity-30">
        <div className="wrapper">
          <h1 className="text-32 font-bold leading-1.2 line-clamp-2">
            {movie.original_name}
          </h1>
          <ul className="mt-4 flex gap-x-4">
            <li>
              <button
                className="text-12 text-white cursor-pointer font-bold rounded px-3 py-2 bg-gray-800 bg-opacity-80 transition-colors hover:text-black hover:bg-gray-200 focus:text-black focus:bg-gray-200"
                style={{ minWidth: '100px' }}
                type="button"
              >
                Play
              </button>
            </li>
            <li>
              <button
                className="text-12 text-white cursor-pointer font-bold rounded px-3 py-2 bg-gray-800 bg-opacity-80 transition-colors hover:text-black hover:bg-gray-200 focus:text-black focus:bg-gray-200"
                style={{ minWidth: '100px' }}
                type="button"
              >
                My List
              </button>
            </li>
          </ul>
          <div className="mt-4 w-full line-clamp-3 sm:w-90">
            <p className="text-12 font-bold leading-1.5">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 h-1/3 bg-gradient-to-b from-transparent to-black" />
    </div>
  );
};
