import { VFC } from 'react';
import { Header } from '@src/layouts/Header/Header';
import { Footer } from '@src/layouts/Footer/Footer';
import { CommonPropsType } from '@src/configs';
import { Hero } from '@src/components';

type LayoutPropsType = Pick<CommonPropsType, 'children'>;

export const Layout: VFC<LayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <Hero />
      <main className="px-5 py-20 sm:px-10 sm;py-40">
        {children}
      </main>
      <Footer />
    </>
  );
};
