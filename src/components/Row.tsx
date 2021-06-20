import { VFC, useState } from 'react';
import { axiosInstance } from '@src/helper';
import { requests, baseURL } from '@src/configs';
import { AspectRatio } from '@src/components/AspectRatio';
import { Movie } from '@src/components/type';
import YouTube from 'react-youtube';
import {useMovies} from "@src/hooks/useMovies";

type RowPropsType = {
  title: string;
  fetchUrl: typeof requests[keyof typeof requests];
  large?: boolean;
};

//trailerのoption
type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

const opts: Options = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export const Row: VFC<RowPropsType> = ({ title, fetchUrl, large = false }) => {
  //movieのdataを管理する配列
  const {movies} = useMovies(fetchUrl);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  //画像をclickする時の関数
  const handleClick = async (movie: Movie) => {
    //trailerUrlをnullにする
    setTrailerUrl(null);
    try {
      //動画を取得する
      const response = await axiosInstance.get(
        `/movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      //動画の配列の0番目のkeyにYouTubeのidが入っているので代入する
      setTrailerUrl(response.data.results[0]?.key ?? null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="text-white">
      <h2 className="text-20 font-bold sm:text-32">{title}</h2>
      <div className="mt-5 sm:mt-10">
        <ul className="overflow-x-auto flex gap-x-5">
          {movies.map((movie, index) => (
            <li
              className={`flex-shrink-0 ${large ? 'w-40' : 'w-44'}`}
              key={`${movie.id}_${index}`}
            >
              <button
                className="relative w-full overflow-hidden group cursor-pointer"
                onClick={() => handleClick(movie)}
                type="button"
              >
                {large ? (
                  <AspectRatio width={1500} height={2250} />
                ) : (
                  <AspectRatio width={1920} height={1080} />
                )}
                <img
                  className="absolute inset-0 object-cover object-center transition-transform duration-300 ease-out transform group-hover:scale-110"
                  src={`${baseURL}${
                    large ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  decoding="async"
                />
              </button>
            </li>
          ))}
        </ul>
        {trailerUrl && (
          <div className="relative mt-5 -mx-5 sm:mt-10 sm:mx-0 max-w-600">
            <AspectRatio width={16} height={9} />
            <YouTube
              className="absolute inset-0 w-full h-full"
              videoId={trailerUrl}
              opts={opts}
            />
          </div>
        )}
      </div>
    </section>
  );
};
