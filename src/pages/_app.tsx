import '@hisho/reset.css';
import '@src/styles/globals.css';
import { VFC } from 'react';
import { AppProps } from 'next/app';
import 'what-input';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
