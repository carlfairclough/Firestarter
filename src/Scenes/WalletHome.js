import React from "react";

import BalancesScroller from "../Components/BalancesScroller";
import TransactionList from "../Components/TransactionList";

const WalletHome = () => {
  return (
    <>
      <h1>Balances</h1>
      <BalancesScroller />
      <h1>Transactions</h1>
      <TransactionList />
    </>
  );
};

export default WalletHome;
