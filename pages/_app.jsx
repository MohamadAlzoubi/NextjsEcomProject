
import '../styles/fonts.scss';
import '../styles/globals.scss';
import '../styles/navBar.scss';
import '../styles/FirstSection.scss';
import '../styles/MidSection.scss';
import '../styles/LowerSection.scss';

import '../styles/pieChart.scss';
import '../styles/modal.scss';

import React from 'react';

import Head from './components/head'; // Make sure the path is correct

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
      {/* Modal is now inside ModalProvider but outside any component that would consume the context */}
    </>
  );
}

export default MyApp;