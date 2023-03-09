import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiChevronRight,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import Link from "next/link";

const HeaderTopBar = () => {
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="header-left">
              <p>
                <a href="#link">
                  Get the most advanced template <FiChevronRight />
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="header-right">
              <div className="address-content">
                <p>
                  <FiMapPin />
                  <span>Alabama, USA</span>
                </p>
                <p>
                  <FiPhone />
                  <span>
                    <a href="#">+06 58 49 99 56</a>
                  </span>
                </p>
              </div>
              <div className="social-icon-wrapper">
                <ul className="social-icon social-default icon-naked">
                  <li>
                    <Link href="facebook.com">
                      <FiFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="twitter.com">
                      <FiTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="instagram.com">
                      <FiInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="linkdin.com">
                      <FiLinkedin />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
