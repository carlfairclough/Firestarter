import React from "react";
import { MemoryRouter, Route } from "react-router-dom";

import ClaimWallet from "./Claim.1.Incognito";
import ClaimWalletName from "./Claim.2.Name";
import ClaimWalletMigrate from "./Claim.3.Migrate";

import Layout from "../Components/Layout";

const Claim = () => {
  if (!localStorage.private) {
    return (
      <MemoryRouter initialEntries={["/claim"]} initialIndex={0}>
        <Route exact path="/claim" component={ClaimWallet} />
        <Route exact path="/claimwalletname" component={ClaimWalletName} />
        <Route
          exact
          path="/claimwalletmigrate"
          component={ClaimWalletMigrate}
        />
      </MemoryRouter>
    );
  } else {
    return (
      <Layout>
        <h1>You have a wallet</h1>
        <a href="/wallet">Go to wallet</a>
      </Layout>
    );
  }
};

export default Claim;
