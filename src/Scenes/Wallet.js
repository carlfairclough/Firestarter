import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "../Components/Layout";
import WalletHome from "./WalletHome";

const Wallet = () => {
  if (!localStorage.private) {
    return (window.location = "/claim");
  } else {
    return (
      <Layout>
        <Router>
          <Route component={WalletHome} />
        </Router>
      </Layout>
    );
  }
};

export default Wallet;
