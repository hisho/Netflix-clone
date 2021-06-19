import { VFC, useContext } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useSEO } from '@src/hooks/useSEO';
import { PageContext } from '@src/store';

type HeadPropsType = Omit<NextSeoProps, 'title' | 'description' | 'canonical'>;

export const Head: VFC<HeadPropsType> = () => {
  const { page } = useContext(PageContext);
  const SEO = useSEO(page);
  return (
    <NextSeo
      title={SEO.title}
      description={SEO.description}
      openGraph={{
        type: 'website',
        locale: SEO.locale,
        url: SEO.path,
        site_name: SEO.name,
        title: SEO.title,
        description: SEO.description,
        images: [{ url: SEO.image }],
      }}
      canonical={SEO.path}
    />
  );
};
