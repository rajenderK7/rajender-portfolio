import { Html, Head, Main, NextScript } from "next/document";
import Metatags from "../components/MetaTags";

export default function Document() {
  return (
    <Html>
      <Head>
        <Metatags
          title="Rajender Katkuri"
          description="Web and mobile application developer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter&family=Space+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
