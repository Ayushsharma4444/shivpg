import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {loader && <PreLoader />}
      <Head>
        <title>Shiv Niwas PG</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          // href="assets/images/favicon.png"
          href="https://img.myloview.com/murals/art-artwork-background-black-blessing-culture-decorated-decoration-deity-design-devotion-festival-god-graphic-hindu-hinduism-india-indian-logo-lord-maha-maha-shivratri-mahadev-m-400-236118854.jpg"
          type="image/x-icon"
        />
        <link rel="icon" href="https://lh5.googleusercontent.com/p/AF1QipOodfsaUzJn_6fOnrfXtX7phjw9dSFci8laNclY" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
