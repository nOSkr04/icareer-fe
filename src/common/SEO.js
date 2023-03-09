import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

const SEO = ({ title, description, image }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta
        property="og:url"
        content={`https://www.icareer.mn${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://career-developer.com/upload/${image}`}
      />
    </Head>
  );
};
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
