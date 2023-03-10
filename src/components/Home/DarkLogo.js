import PropTypes from "prop-types";
import React from "react";

const DarkLogo = ({ image, image2, style1 }) => {
  return (
    <>
      <img src={image} alt="Banner Images" className="logo-light " />
      <img
        src={image2}
        alt="Banner Images"
        className="logo-dark"
        // style={{ marginLeft: "60px" }}
      />
    </>
  );
};
DarkLogo.propTypes = {
  image: PropTypes.string,
};

export default DarkLogo;
