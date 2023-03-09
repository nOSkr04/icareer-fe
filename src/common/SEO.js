import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

const SEO = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:url" content="www.icareer.mn" />
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
