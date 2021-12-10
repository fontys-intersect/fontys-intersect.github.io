import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import Navbar from "./Navbar";
import { BestPractices } from "./Pages/BestPractices";
import { Authentication } from "./Pages/BestPractices/authentication";
import { Authorization } from "./Pages/BestPractices/authorization";
import { Certificates } from "./Pages/BestPractices/certificates";

import { ErrorHandling } from "./Pages/BestPractices/errorHandling";
import { InputValidation } from "./Pages/BestPractices/inputvalidation";
import { SecData } from "./Pages/BestPractices/securedata";
import { SplitDevelopment } from "./Pages/BestPractices/splitdev";

import { DataHandling } from "./Pages/BestPractices/dataHandling";
import { PrivacyStandard } from "./Pages/BestPractices/privacyStandard";
import { SecretManagement } from "./Pages/BestPractices/secretManagement";

import { SecData } from "./Pages/BestPractices/securedata";
import { VersionUpdate } from "./Pages/BestPractices/versionUpdate";

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
          <Route path="/bestpractices/errorhandling" exact component={ErrorHandling} />
          <Route path="/bestpractices/inputvalidation" exact component={InputValidation} />
          <Route path="/bestpractices/splitdev" exact component={SplitDevelopment} />
          <Route path="/bestpractices/datahandling" exact component={DataHandling} />
          <Route path="/bestpractices/privacy" exact component={PrivacyStandard} />
          <Route path="/bestpractices/secretmanagement" exact component={SecretManagement} />
          <Route path="/bestpractices/versionupdate" exact component={VersionUpdate} />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

export default Router;
