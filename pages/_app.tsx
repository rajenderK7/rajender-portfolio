import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <Header />
        <div className="mt-1">
          <Component {...pageProps} />
        </div>
      </>
    </Layout>
  );
}

export default MyApp;
