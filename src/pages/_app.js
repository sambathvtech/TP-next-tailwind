import React from 'react';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import '../utilities/i18n';
import '../styles/globals.css';
import { Main } from '../components';

const config = {
  enableRecoil: false,
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  let appElem = (
    <Layout>
      <Head>
        {/* <Main.FbPixel /> */}
        <Main.GATag />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );

  if (config.enableRecoil) {
    appElem = <RecoilRoot>{appElem}</RecoilRoot>;
  }

  return appElem;
}

export default MyApp;
