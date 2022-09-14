import Head from "next/head";
import React from "react";
import { MetatagsProps } from "../interfaces/metaTagsProps";

const Metatags = ({ title, description, image, author }: MetatagsProps) => {
  return (
    <Head>
      <title>{title}</title>
      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={author ?? "Rajender Katkuri"} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={title} />

      {/* Open graph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="Portfolio" />
      <meta property="description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta name="author" content={author ?? "Rajender Katkuri"} />
    </Head>
  );
};

export default Metatags;
