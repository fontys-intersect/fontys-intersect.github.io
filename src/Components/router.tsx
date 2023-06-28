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
import { BluetoothLock } from "./Pages/BluetoothLock/bluetoothlock";
import { BluetoothLock2 } from "./Pages/BluetoothLock2/bluetoothlock2";
import { Foscam } from "./Pages/Foscam/foscam";
import { SmartLighting } from "./Pages/SmartLighting/smartlighting";
import { FlipperZero } from "./Pages/FlipperZero/flipperzero";

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
import { SmartWatch } from "./Pages/Cases/smartWatch";
import { GooveySmartTemp } from "./Pages/Cases/GooveySmartTemp";
import {SolarEdge} from "./Pages/Cases/solaredge";
import {Printer} from "./Pages/Cases/printer";
import {Article} from "./Pages/Articles/articlehome";
import {WLEDArticle} from "./Pages/Articles/wledarticle";
import {SecureArticle} from "./Pages/Articles/articlesecure";
import {AirQuality} from "./Pages/Cases/airqualitySensor";
import { CaseOverview } from "./Pages/Cases";
import {SmartScreen} from "./Pages/Cases/smartScreen";
import { ToolingOverview } from "./Pages/Tooling";
import { Burpsuite } from "./Pages/Tooling/burpsuite";
import { Metasploit } from "./Pages/Tooling/metasploit";
import { Shodan } from "./Pages/Tooling/shodan";
import { Nessus } from "./Pages/Tooling/nessus";
import { HciTool } from "./Pages/Tooling/hciTool";
import { PrinterExploitTool } from "./Pages/Tooling/printerExploitTool";
import { Gattacker } from "./Pages/Tooling/gattacker";
import { Bdaddr } from "./Pages/Tooling/bdaddr";
import { Nrfconnect } from "./Pages/Tooling/nrfconnect";
import { Wireshark } from "./Pages/Tooling/wireshark";
import { ZeekTooling } from "./Pages/Tooling/zeekTooling";
import {NetworkSetup} from "./Pages/Tooling/networksetup";
import {TestLab} from "./Pages/Tooling/testlab";

class Router extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        {/* <Header /> */}
        <Switch>



          <Route path="/" exact component={Homepage} />
          <Route path="/case/bluetoothlock" exact component={BluetoothLock} />
          <Route path="/case/bluetoothlock2" exact component={BluetoothLock2} />
          <Route path="/case/foscam" exact component={Foscam} />
          <Route path="/case/flipperzero" exact component={FlipperZero} />
          <Route path="/case/smartlighting" exact component={SmartLighting} />
          <Route path="/case/wled" exact component={Wled} />
          <Route path="/case/smartlockbt" exact component={SmartLockBT} />
          <Route path="/case/smartlock" exact component={SmartLock} />
          <Route path="/case/boschsiemens" exact component={BoschSiemens} />
          <Route path="/case/gooveysmarttemp" exact component={GooveySmartTemp} />
          <Route path="/case/solaredge" exact component={SolarEdge} />
          <Route path="/case/printer" exact component={Printer} />
          <Route path="/case/airquality" exact component={AirQuality} />
          <Route path="/case/smartwatch" exact component={SmartWatch} />
          <Route path="/case/smartscreen" exact component={SmartScreen} />
          <Route path="/case" exact component={CaseOverview} />
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
          <Route path="/tooling/testlab" exact component={TestLab} />
          <Route path="/article/network" exact component={SecureArticle} />
          <Route path="/bestpractices" exact component={BestPractices} />
          <Route path="/tooling" exact component={ToolingOverview} />
          <Route path="/tooling/burpsuite" exact component={Burpsuite} />
          <Route path="/tooling/nessus" exact component={Nessus} />
          <Route path="/tooling/metasploit" exact component={Metasploit} />
          <Route path="/tooling/shodan" exact component={Shodan} />
          <Route path="/tooling/hci" exact component={HciTool} />
          <Route path="/tooling/pret" exact component={PrinterExploitTool} />
          <Route path="/tooling/wireshark" exact component={Wireshark} />
          <Route path="/tooling/zeek" exact component={ZeekTooling} />
          <Route path="/tooling/networksetup" exact component={NetworkSetup} />
          <Route path="/tooling/gattacker" exact component={Gattacker} />
          <Route path="/tooling/nrfconnect" exact component={Nrfconnect} />
          <Route path="/tooling/bdaddr" exact component={Bdaddr} />
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
