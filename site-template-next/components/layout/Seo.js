import React from "react";
import Head from "next/head";

const Seo = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} key="title" />
      <meta
        name="description"
        content="Penguin Tours.  Connecting People and Penguins.  A site demonstration by md web technologies."
      />
      <meta
        name="keywords"
        content="react business home page services tesimonials faq contact"
      />
      <meta property="og:title" content="Penguin Tours Ltd." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://penguin.mdbytes.us/" />
      <meta property="og:image" content="https://bit.ly/3uTxbcW" />

      <meta name="twitter:title" content="Penguin Tours Ltd." />
      <meta
        name="twitter:description"
        content="Penguin Tours.  Connecting People and Penguins.  A site demonstration by md web technologies."
      />
      <meta name="twitter:image" content="https://bit.ly/3uTxbcW" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
