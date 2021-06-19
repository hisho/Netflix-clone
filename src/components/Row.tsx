import { VFC, useState, useEffect } from 'react';
import { axiosInstance } from '@src/helper';
import { requests,baseURL } from '@src/configs';
import { AspectRatio } from '@src/components/AspectRatio';
import {Movie} from "@src/components/type";

type RowPropsType = {
  title: string;
  fetchUrl: typeof requests[keyof typeof requests];
  large?: boolean;
};

export const Row: VFC<RowPropsType> = ({ title, fetchUrl, large = false }) => {
  //TODO hooksに切り出し
  //movieのdataを管理する配列
  const [movies, setMovies] = useState<Movie[]>([]);

  //movieのdataを取得する
  useEffect(() => {
    (async () => {
      const request = await axiosInstance.get(fetchUrl);
      setMovies(request.data.results);
    })();
  }, [fetchUrl]);

  return (
    <section className="text-white">
      <h2 className="">{title}</h2>
      <div className="mt-5">
        <ul className="overflow-x-auto flex gap-x-5">
          {movies.map((movie, index) => (
            <li
              className={`flex-shrink-0 ${large ? 'w-40' : 'w-44'}`}
              key={`${movie.id}_${index}`}
            >
              <div className="relative overflow-hidden group cursor-pointer">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
