/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';

const CustomHead = () => {
  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-pzjw8kw8Hzt0u4r5+V8SC4f5gC7PjBE5auz2+dH8zS6Dl9Z+qDWO8D1t6k72Hym"
        crossOrigin="anonymous"
      />
      <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" crossOrigin="anonymous"></script>
    </Head>
  );
};

export default CustomHead;