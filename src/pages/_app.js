import React from 'react';
import { RecoilRoot } from 'recoil';
import '../utilities/i18n';
import '../styles/globals.css';
import '../styles/main.css';
import { seoDefualt } from '@constants';
import { Main } from '@components/common';

const config = {
  enableRecoil: false,
};

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  let appElem = getLayout(
    <>
      <Main.HeadNextSeo dataSource={pageProps?.seo || seoDefualt} />
      <Component {...pageProps} />
    </>
  );

  if (config.enableRecoil) {
    appElem = <RecoilRoot>{appElem}</RecoilRoot>;
  }

  return appElem;
}

export default MyApp;
