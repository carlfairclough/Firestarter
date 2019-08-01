import React from "react";
import { Link } from "react-router-dom";

const ClaimWalletName = () => {
  return (
    <>
      <h1>Claim your burner wallet</h1>
      <p>Remember, don’t clear your cache or else you will lose your wallet</p>
      <p>
        <label>
          Give your wallet a name
          <input type="text" />
        </label>
      </p>
      <Link to="/claimwalletmigrate">Claim your wallet!</Link>
    </>
  );
};

export default ClaimWalletName;
