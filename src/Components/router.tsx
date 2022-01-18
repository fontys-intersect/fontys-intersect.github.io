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
import { VersionUpdate } from "./Pages/BestPractices/versionUpdate";
import { Wled } from "./Pages/Cases/WLED";
import { Homepage } from "./Pages/homepage";
import { Password } from "./Pages/Owasp/passwords";
import { OwaspHome } from "./Pages/Owasp/top10home";
import { Monitoring } from "./Pages/BestPractices/monitoring";
import { SmartLockBT } from "./Pages/Cases/smartLockBT";

import {Network} from "./Pages/Owasp/insecurenetwork";
import {Interfaces} from "./Pages/Owasp/insecureinterfaces";
import {Update} from "./Pages/Owasp/lackofupdate";
import {Outdated} from "./Pages/Owasp/Insecureoroutdatedcomponents";
import {Privacy} from "./Pages/Owasp/insufficientprivacyprotection";
import {Storage} from "./Pages/Owasp/insecuredatatransferandstorage";
import {Management} from "./Pages/Owasp/lackofmanagement";
import {Settings} from "./Pages/Owasp/insecuredefaultsettings";
import {Physical} from "./Pages/Owasp/lackofphysicalhardening";
import { SmartLock } from "./Pages/Cases/smartLock";
import { BoschSiemens } from "./Pages/Cases/boschSiemens";
import { GooveySmartTemp } from "./Pages/Cases/GooveySmartTemp";
import {SolarEdge} from "./Pages/Cases/solaredge";
import {Printer} from "./Pages/Cases/printer";
import {Article} from "./Pages/Articles/articlehome";
import {WLEDArticle} from "./Pages/Articles/wledarticle";
import {SecureArticle} from "./Pages/Articles/articlesecure";
import {AirQuality} from "./Pages/Cases/airqualitySensor";


class Router extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        {/* <Header /> */}
        <Switch>



          <Route path="/" exact component={Homepage} />
          <Route path="/case/wled" exact component={Wled} />
          <Route path="/case/smartlockbt" exact component={SmartLockBT} />
          <Route path="/case/smartlock" exact component={SmartLock} />
          <Route path="/case/boschsiemens" exact component={BoschSiemens} />
          <Route path="/case/gooveysmarttemp" exact component={GooveySmartTemp} />
          <Route path="/case/solaredge" exact component={SolarEdge} />
          <Route path="/case/printer" exact component={Printer} />
          <Route path="/case/airquality" exact component={AirQuality} />
          <Route path="/owasp/top" exact component={OwaspHome} />
          <Route path="/owasp/top/1" exact component={Password} />
          <Route path="/owasp/top/2" exact component={Network} />
          <Route path="/owasp/top/3" exact component={Interfaces} />
          <Route path="/owasp/top/4" exact component={Update} />
          <Route path="/owasp/top/5" exact component={Outdated} />
          <Route path="/owasp/top/6" exact component={Privacy} />
          <Route path="/owasp/top/7" exact component={Storage} />
          <Route path="/owasp/top/8" exact component={Management} />
          <Route path="/owasp/top/9" exact component={Settings} />
          <Route path="/owasp/top/10" exact component={Physical} />
          <Route path="/article/home" exact component={Article} />
          <Route path="/article/wled" exact component={WLEDArticle} />
          <Route path="/article/network" exact component={SecureArticle} />
          <Route path="/bestpractices" exact component={BestPractices} />
          <Route
            path="/bestpractices/authentication"
            exact
            component={Authentication}
          />
          <Route
            path="/bestpractices/authorization"
            exact
            component={Authorization}
          />
          <Route path="/bestpractices/securedata" exact component={SecData} />
          <Route
            path="/bestpractices/certificates"
            exact
            component={Certificates}
          />
          <Route
            path="/bestpractices/errorhandling"
            exact
            component={ErrorHandling}
          />
          <Route
            path="/bestpractices/inputvalidation"
            exact
            component={InputValidation}
          />
          <Route
            path="/bestpractices/splitdev"
            exact
            component={SplitDevelopment}
          />
          <Route
            path="/bestpractices/datahandling"
            exact
            component={DataHandling}
          />
          <Route
            path="/bestpractices/privacy"
            exact
            component={PrivacyStandard}
          />
          <Route
            path="/bestpractices/secretmanagement"
            exact
            component={SecretManagement}
          />
          <Route
            path="/bestpractices/versionupdate"
            exact
            component={VersionUpdate}
          />
          <Route
            path="/bestpractices/monitoring"
            exact
            component={Monitoring}
          />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

export default Router;
