import Navbar from "../components/navbar";
import localFont from "next/font/local";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";

export const metadata = {
  title: "Temo",
  description: "TEMp",
};

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: [
    {
      path: "../fonts/SFTSchriftedSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/SFTSchriftedSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      // path: "../fonts/SFT-Schrifted-Sans.ttf",
      path: "../fonts/SFTSchriftedSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SFTSchriftedSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SFTSchriftedSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SFTSchriftedSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--Schrifted",
});

export default function RootLayout({ children }) {
  return (
    <html className={`${myFont.variable} font-sch`}>
      <head>
        <link rel="icon" href="/icon.svg" sizes="any" />
        <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css" />
      </head>
      <body className="w-full">
        <main className="w-full">{children}</main>
        {/* <Footer className="overflow-hidden pb-16 pl-0 md:pb-0 ltr:md:pl-16" /> */}
      </body>
    </html>
  );
}
