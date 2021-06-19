import { useSiteMeta } from '@src/hooks/useSiteMeta';
import { pageDataType } from '@src/configs';

type useSEOType = {
  lang: string;
  locale: string;
  name: string;
  title: string;
  description: string;
  url: string;
  image: string;
  path: string;
};

type useSEOFunctionType = (props: pageDataType) => useSEOType | never;

export const useSEO: useSEOFunctionType = ({
  page_id,
  title,
  description,
  image = 'common/ogp.png',
  path,
}) => {
  const siteMetaData = useSiteMeta();
  const isTopPage = page_id === '1';
  const pageTitle = isTopPage
    ? siteMetaData.name + ' | ' + title
    : title + ' | ' + siteMetaData.name;
  const pageDescription = description ? description : siteMetaData.description;
  const pagePath = siteMetaData.siteUrl + path;
  const pageOGPImage = siteMetaData.siteUrl + 'assets/images/' + image;

  return {
    lang: siteMetaData.lang,
    locale: siteMetaData.locale,
    name: siteMetaData.name,
    title: pageTitle,
    description: pageDescription,
    url: siteMetaData.siteUrl,
    image: pageOGPImage,
    path: pagePath,
  };
};
