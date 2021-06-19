import { VFC } from 'react';
import { Layout, Head } from '@src/layouts';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';

const Page: VFC = () => {
  const currentPage = usePageReducer('0');

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <Head />
      </Layout>
    </PageContext.Provider>
  );
};

export default Page;
