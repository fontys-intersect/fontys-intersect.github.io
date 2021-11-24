import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import Navbar from "./Navbar";
import { Wled } from "./Pages/Cases/WLED";
import { Homepage } from "./Pages/homepage";
import { Password } from "./Pages/Owasp/passwords";
import { OwaspHome } from "./Pages/Owasp/top10home";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/case/wled" exact component={Wled} />
          <Route path="/owasp/top" exact component={OwaspHome} />
          <Route path="/owasp/top/1" exact component={Password} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
