
import '../styles/fonts.scss';
import '../styles/globals.scss';
import '../styles/navBar.scss';
import '../styles/FirstSection.scss';
import '../styles/MidSection.scss';
import '../styles/LowerSection.scss';
import '../styles/screen.scss';
import '../styles/pieChart.scss';


import Head from './components/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;