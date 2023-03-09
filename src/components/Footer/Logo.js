import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

const Logo = ({ image, image2 }) => {
  return (
    <>
      <Link href={"/"}>
        <img
          className="logo-light"
          src={image}
          alt="Corporate Logo"
          style={{ width: 200, height: 70 }}
        />
        <img className="logo-dark" src={image2} alt="Corporate Logo" />
      </Link>
    </>
  );
};
Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;
