import React from 'react';
import { CommonPropsType } from '@src/configs';

type BrPropsType = Partial<Pick<CommonPropsType, 'className' | 'style'>>;

export const Br: React.VFC<BrPropsType> = ({ className = '', style = {} }) => {
  return <br className={className} style={style} aria-hidden={true} />;
};
