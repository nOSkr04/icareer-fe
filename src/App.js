import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";
import "animate.css/animate.min.css";
import "./assets/scss/style.scss";
import HomeScreen from "./pages/Home/HomeScreen";
import Contact from "./pages/Contacts/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Pricing from "./pages/Price/Pricing";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";

const App = () => {
  // 123
  return (
    <Router>
      <PageScrollTop>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + "/"}`}
            exact
            component={HomeScreen}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/Privacy-policy"}`}
            exact
            component={PrivacyPolicy}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/pricing"}`}
            exact
            component={Pricing}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            exact
            component={Contact}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/error"}`}
            exact
            component={Error}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/news"}`}
            exact
            component={News}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/news/:id"}`}
            exact
            component={NewsDetails}
          />
        </Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;
