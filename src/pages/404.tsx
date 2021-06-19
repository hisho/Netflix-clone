import { VFC } from 'react';
import { Layout, Head } from '@src/layouts';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';

const Page: VFC = () => {
  const currentPage = usePageReducer('999999', (page) => ({
    ...page,
    // path: location.pathname,
  }));

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <Head />
        404 page
      </Layout>
    </PageContext.Provider>
  );
};

export default Page;
