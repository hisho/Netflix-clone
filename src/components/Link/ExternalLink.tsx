import React, { VFC } from 'react';
import { CommonPropsType } from '@src/configs';

type ExternalLinkPropsType = Partial<Pick<CommonPropsType, 'className'>> &
  Pick<CommonPropsType, 'children'> & {
    href: string;
  };

export const ExternalLink: VFC<ExternalLinkPropsType> = ({
  href,
  className = '',
  children,
}) => {
  return (
    <a href={href} className={className} rel="noopener" target="_blank">
      {children}
    </a>
  );
};
