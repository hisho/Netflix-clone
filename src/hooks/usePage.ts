import { pages, pagesType, pagesPropType, pageObjectType } from '@src/configs';

/**
 * メモ
 * 関数型から静的Classかシングルトンに変更するかも
 */

type getPageType = (
  page_id: pagesPropType['page_id']
) => pageObjectType | never;
type getPagesType = (
  ...page_id: pagesPropType['page_id'][]
) => pageObjectType[] | never;
type isTopPage = (page_id: pagesPropType['page_id']) => boolean;

type usePageType = () => {
  pages: pagesType;
  getPage: getPageType;
  getPages: getPagesType;
  isTopPage: isTopPage;
};

export const usePage: usePageType = () => {
  const getPage: getPageType = (page_id) => {
    const currentPage = pages.find((n) => n.page_id === page_id);
    if (!currentPage) {
      throw new Error(`${page_id}は存在しません。`);
    }
    return currentPage;
  };

  const getPages: getPagesType = (...page_id) => {
    const currentPages = [];
    for (const id of page_id) {
      const currentPage = pages.find((n) => n.page_id === id);
      if (currentPage) currentPages.push(currentPage);
    }

    if (currentPages.length === 0) {
      throw new Error(`${page_id}は存在しません。`);
    }
    return currentPages;
  };

  const isTopPage: isTopPage = (page_id) => {
    return page_id === '1';
  };

  return {
    pages,
    getPage,
    getPages,
    isTopPage,
  };
};
