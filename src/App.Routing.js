import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Claim from "./Scenes/Claim";
import Wallet from "./Scenes/Wallet";

const Test = () => <h1>Test</h1>;

const Routing = props => {
  return (
    <Router>
      <Route exact path="/test/" component={Test} />
      <Route exact path="/claim/" component={Claim} />
      <Route exact path="/wallet/" component={Wallet} />
    </Router>
  );
};

export default Routing;
