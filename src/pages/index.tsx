import { VFC } from 'react';
import { Layout, Head } from '@src/layouts';
import { Row, Spacer } from '@src/components';
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
        <Spacer className="h-10 sm:h-20" />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Spacer className="h-10 sm:h-20" />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Spacer className="h-10 sm:h-20" />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Spacer className="h-10 sm:h-20" />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Spacer className="h-10 sm:h-20" />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Spacer className="h-10 sm:h-20" />
        <Row title="DOcumentaries" fetchUrl={requests.fetchDocumentMovies} />
      </Layout>
    </PageContext.Provider>
  );
};

export default Page;
