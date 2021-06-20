import { VFC, useState, useEffect } from 'react';
import { AspectRatio } from '@src/components';
import { throttle } from 'lodash';

type HeaderPropsType = {};

export const Header: VFC<HeaderPropsType> = () => {
  //交差しているかどうかのステート
  const [intersection, setIntersection] = useState(false);

  useEffect(() => {
    //scroll event
    //throttleで300ms間引く
    const handleScrollEvent = throttle(() => {
      //100px以上かどうか
      const isIntersection = window.scrollY > 100;
      setIntersection(isIntersection);
    }, 300);

    window.addEventListener('scroll', handleScrollEvent, false);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent, false);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-filter backdrop-blur-sm transition-colors duration-500 bg-primary-black shadow-md ${
        intersection ? 'bg-opacity-100' : 'bg-opacity-0'
      }`}
    >
      <div className="px-5 flex justify-between items-center h-17 sm:px-10">
        <div className="relative w-20">
          <AspectRatio width={625} height={169} />
          <img
            className="absolute left-0 top-0"
            src="/netflix.svg"
            alt=""
            width={625}
            height={169}
            decoding="async"
          />
        </div>
        <div className="relative w-8">
          <AspectRatio width={32} height={32} />
          <img
            className="absolute left-0 top-0"
            src="/avatar.png"
            alt=""
            width={32}
            height={32}
            decoding="async"
          />
        </div>
      </div>
    </header>
  );
};
