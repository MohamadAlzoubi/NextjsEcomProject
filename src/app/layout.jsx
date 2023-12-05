import Navbar from "../components/navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Temo",
  description: "TEMp",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/icon.svg" sizes="any" />
        <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css" />
      </head>
      <body>
        <main className="">{children}</main>
        {/* <Footer className="overflow-hidden pb-16 pl-0 md:pb-0 ltr:md:pl-16" /> */}
      </body>
    </html>
  );
}
