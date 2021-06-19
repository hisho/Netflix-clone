import { Reducer } from 'react';
import { PageContextAction } from '@src/store/page/type';
import { pageDataType } from '@src/configs';

export const PageContextReducer: Reducer<pageDataType, PageContextAction> = (
  prevState,
  action
) => {
  switch (action.type) {
    case 'path':
      return { ...prevState, path: action.payload };
    default:
      return prevState;
  }
};
