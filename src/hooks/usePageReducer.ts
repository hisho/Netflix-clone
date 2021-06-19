import { useReducer, Dispatch } from 'react';
import { PageContextReducer, PageContextAction } from '@src/store';
import { usePage } from '@src/hooks/usePage';
import { pageDataType, pagesPropType } from '@src/configs';

type usePageReducerType = (
  page_id: pagesPropType['page_id'],
  callback?: (currentPage: pageDataType) => pageDataType
) => { page: pageDataType; dispatch: Dispatch<PageContextAction> };

export const usePageReducer: usePageReducerType = (page_id, callBack) => {
  const { getPage } = usePage();
  const currentPage = getPage(page_id);
  const newPage = callBack ? callBack(currentPage) : currentPage;

  const [page, dispatch] = useReducer(PageContextReducer, newPage);

  return {
    page,
    dispatch,
  };
};
