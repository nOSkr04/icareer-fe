import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
const MetaShare = ({ title, ogTitle, ogDescrtiption, image, id }) => {
  return (
    <Helmet>
      <title>ogTitle</title>
      <meta name="title" content={ogTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://www.icareer.mn/news/${id}`} />
      <meta property="og:title" content={ogTitle} />
      <meta
        property="og:image"
        content={`https://career-developer.com/upload/${image}`}
      />
    </Helmet>
  );
};
MetaShare.propTypes = {
  title: PropTypes.string.isRequired,
  ogTitle: PropTypes.string.isRequired,
  ogDescrtiption: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MetaShare;
