import Link from "next/link";
import React from "react";

const FourOhFour = () => {
  return (
    <main className="mx-3">
      <h1 className="font-black my-4 text-center text-2xl lg:text-3xl">
        404 - That page does not seem to exist...
      </h1>
      <section className="max-w-2xl lg:max-w-none">
        <iframe
          src="https://giphy.com/embed/fnuSiwXMTV3zmYDf6k"
          className="mx-auto giphy-embed"
          height="360"
          width="360"
          allowFullScreen
        ></iframe>
      </section>
      <div className="text-center mx-auto">
        <Link href="/">
          <a className="my-3 text-blue-700 font-medium text-lg underline">
            Go home
          </a>
        </Link>
      </div>
    </main>
  );
};

export default FourOhFour;
