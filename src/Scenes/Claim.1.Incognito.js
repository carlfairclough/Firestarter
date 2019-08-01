import React from "react";
import { Link } from "react-router-dom";

const ClaimWallet = () => {
  return (
    <>
      <h1>Claim your burner wallet</h1>
      <p>
        Your burner wallet is browser-based &amp; built specifically to use with
        different vendors at events here.
      </p>
      <p>If you are in incognito mode, please enter regular browsing mode</p>
      <Link to="/claimwalletname">I'm not in Incognito</Link>
    </>
  );
};

export default ClaimWallet;
