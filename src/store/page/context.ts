import { createContext } from 'react';
import { PageContextAction } from '@src/store/page/type';
import { pageDataType } from '@src/configs';

export const PageContext = createContext(
  {} as {
    page: pageDataType;
    dispatch: (nextState: PageContextAction) => void;
  }
);
