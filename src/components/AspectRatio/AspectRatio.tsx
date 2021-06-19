import React, { VFC } from 'react';
import { percentage } from '@src/helper';
import { CommonPropsType } from '@src/configs';

type AspectRatioPropsType = Partial<
  Pick<CommonPropsType, 'className' | 'children'>
> & {
  width: number;
  height: number;
};

export const AspectRatio: VFC<AspectRatioPropsType> = ({
  className = '',
  children,
  width,
  height,
}) => {
  return (
    <div
      className={className}
      style={{ paddingTop: percentage(height / width) }}
    >
      {children}
    </div>
  );
};
