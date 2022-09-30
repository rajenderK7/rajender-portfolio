import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SocialMediaDesktop from "../components/SocialMediaDesktop";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <>
        <Head>
          <title>Rajender Katkuri</title>
        </Head>
        <SocialMediaDesktop />
        <Layout>
          <>
            <Header />
            <Component {...pageProps} />
          </>
        </Layout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
