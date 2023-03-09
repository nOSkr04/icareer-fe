import PropTypes from "prop-types";
import React from "react";
// import Helmet from "react-helmet";
const MetaShare = ({ title, ogTitle, ogDescrtiption, image, id }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="title" content={ogTitle} data-react-helmet="true" />
      <meta property="og:type" content="website" data-react-helmet="true" />
      <meta
        property="og:url"
        content={`https://www.icareer.mn/news/${id}`}
        data-react-helmet="true"
      />
      <meta property="og:title" content={ogTitle} data-react-helmet="true" />
      <meta
        property="og:image"
        content={`https://career-developer.com/upload/${image}`}
        data-react-helmet="true"
      />
    </>
  );
};
MetaShare.propTypes = {
  title: PropTypes.string.isRequired,
  ogTitle: PropTypes.string.isRequired,
  ogDescrtiption: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MetaShare;
