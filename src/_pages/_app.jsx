/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Script from "next/script";
import "../styles/fonts.scss";
import "../styles/globals.css";
import "../styles/globals.scss";
import "../styles/navBar.scss";
import "../styles/FirstSection.scss";
import "../styles/MidSection.scss";
import "../styles/LowerSection.scss";

import "../styles/pieChart.scss";
import "../styles/modal.scss";
import "../styles/screen.scss";

import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
      {/* Modal is now inside ModalProvider but outside any component that would consume the context */}
    </>
  );
}

export default MyApp;
