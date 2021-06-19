import { VFC } from 'react';
import { Layout, Head } from '@src/layouts';
import { Row } from '@src/components';
import { requests } from '@src/configs';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';

const Page: VFC = () => {
  const currentPage = usePageReducer('1');
  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <Head />
        <Row
          title="NETFLIX ORIGUINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          large={true}
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="DOcumentaries" fetchUrl={requests.fetchDocumentMovies} />
      </Layout>
    </PageContext.Provider>
  );
};

export default Page;
