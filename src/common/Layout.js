import React from "react";
import HeaderOne from "./header/HeaderOne";
import FooterTwo from "./footer/FooterTwo";
import Copyright from "./footer/Copyright";

const Layout = ({ children }) => {
  return (
    <div>
      <main className="page-wrapper">
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />
        {children}
      </main>
    </div>
  );
};
export default Layout;
