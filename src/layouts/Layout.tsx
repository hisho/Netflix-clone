import { VFC } from 'react';
import { Header } from '@src/layouts/Header/Header';
import { Footer } from '@src/layouts/Footer/Footer';
import { CommonPropsType } from '@src/configs';

type LayoutPropsType = Pick<CommonPropsType, 'children'>;

export const Layout: VFC<LayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`wrapper`}>{children}</main>
      <Footer />
    </>
  );
};
