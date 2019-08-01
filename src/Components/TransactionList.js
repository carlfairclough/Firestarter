import React from "react";

import transactions from "../dummydata/transactions";

const TransactionList = () =>
  transactions.map((tx, i) => (
    <div key={i}>
      <h2>{tx.from}</h2>
      <p>{tx.type}</p>
      <p>{tx.amount}</p>
      <p>{tx.ticker}</p>
    </div>
  ));

export default TransactionList;
