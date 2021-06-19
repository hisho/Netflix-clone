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
        <div className="text-center pt-16 sm:pt-40 pb-14 sm:pb-28">
          <div className="text-primary-black flex justify-center">
            <svg
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="117.406"
              viewBox="0 0 250 117.406"
            >
              <g transform="translate(-468 -60.477)">
                <path
                  d="M0,83.744,37.356,1.026H55.213L17.447,83.744H46.593V50.493H62.6V83.744h9.031v15.6H62.6v17.241H46.593V99.343H0ZM94.212,33.251c0-10.673,3.489-18.883,9.852-24.631a32.284,32.284,0,0,1,43.924,0c6.158,5.747,9.442,13.957,9.647,24.631v50.9c-.205,10.673-3.489,18.883-9.647,24.631a31.346,31.346,0,0,1-22.167,8.621,32.205,32.205,0,0,1-21.757-8.621q-9.852-8.621-9.852-24.631Zm47.619,1.026c-.205-11.7-5.542-17.652-15.8-17.857-10.263.205-15.6,6.158-15.8,17.652V83.128c.205,11.7,5.542,17.652,15.8,17.652,10.263-.205,15.6-5.952,15.8-17.652Zm36.535,49.466L215.722.821H233.58L195.813,83.744h29.146V50.493h16.01V83.744H250v15.6h-9.031v17.241h-16.01V99.343H178.366v-15.6Z"
                  transform="translate(468 60.477)"
                />
              </g>
            </svg>
          </div>

          <p className="font-bold text-18 sm:text-24 mt-14 sm:mt-28">
            お探しのページは見つかりませんでした
          </p>
          <p className="font-medium leading-1.5 mt-9 sm:mt-18">
            お探しのページはすでに削除されている・公開期間が終わっている・
            <br className="hidden sm:block" />
            アクセスしたアドレスが異なっているなどの理由で見つかりませんでした。
          </p>
          <div className="mt-17 sm:mt-34">
            <div className="font-medium underline inline-block hover:primary">
              ホームへ戻る
            </div>
          </div>
        </div>
      </Layout>
    </PageContext.Provider>
  );
};

export default Page;
