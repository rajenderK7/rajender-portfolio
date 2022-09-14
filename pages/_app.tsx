import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SocialMediaDesktop from "../components/SocialMediaDesktop";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rajender Katkuri</title>
      </Head>
      <SocialMediaDesktop />
      <Layout>
        <>
          <Header />
          <div className="mt-1">
            <Component {...pageProps} />
          </div>
        </>
      </Layout>
    </>
  );
}

export default MyApp;
