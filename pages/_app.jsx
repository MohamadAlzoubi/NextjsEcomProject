import '../styles/globals.scss';
import '../styles/navBar.scss';
import '../styles/banner.scss';
import Head from './components/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;