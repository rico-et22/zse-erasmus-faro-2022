import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
