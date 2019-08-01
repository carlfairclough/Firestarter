import React from "react";

import transactions from "../dummydata/transactions";

const unique = {};
transactions.map(tx => {
  if (!unique.hasOwnProperty(tx.ticker)) {
    unique[tx.ticker] = {};
    unique[tx.ticker].name = tx.ticker;
    unique[tx.ticker].amount = tx.amount;
  } else {
    unique[tx.ticker].amount += tx.amount;
  }
  return null;
});
const BalancesScroller = () => {
  return Object.keys(unique).map(key => (
    <div key={key}>
      <h1>{unique[key].amount}</h1>
      <p>{key}</p>
    </div>
  ));
};

export default BalancesScroller;
