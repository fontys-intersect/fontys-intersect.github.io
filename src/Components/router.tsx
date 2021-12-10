import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import Navbar from "./Navbar";
import { BestPractices } from "./Pages/BestPractices";
import { Authentication } from "./Pages/BestPractices/authentication";
import { Authorization } from "./Pages/BestPractices/authorization";
import { Certificates } from "./Pages/BestPractices/certificates";
import { SecData } from "./Pages/BestPractices/securedata";
import { Wled } from "./Pages/Cases/WLED";
import { Homepage } from "./Pages/homepage";
import { Password } from "./Pages/Owasp/passwords";
import { OwaspHome } from "./Pages/Owasp/top10home";

class Router extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/case/wled" exact component={Wled} />
          <Route path="/owasp/top" exact component={OwaspHome} />
          <Route path="/owasp/top/1" exact component={Password} />
          <Route path="/bestpractices" exact component={BestPractices} />
          <Route path="/bestpractices/authentication" exact component={Authentication} />
          <Route path="/bestpractices/authorization" exact component={Authorization} />
          <Route path="/bestpractices/securedata" exact component={SecData} />
          <Route path="/bestpractices/certificates" exact component={Certificates} />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

export default Router;
