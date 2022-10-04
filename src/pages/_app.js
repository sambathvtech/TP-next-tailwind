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
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  let appElem = (
    <Layout>
      <Main.HeadNextSeo dataSource={pageProps?.seo || seoDefualt} />
      <Component {...pageProps} />
    </Layout>
  );

  if (config.enableRecoil) {
    appElem = <RecoilRoot>{appElem}</RecoilRoot>;
  }

  return appElem;
}

export default MyApp;
