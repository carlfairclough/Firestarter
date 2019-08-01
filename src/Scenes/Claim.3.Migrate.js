import React from "react";
import LoadingCycle from "../Components/LoadingCycle";

const loadingStates = [
  {
    emoji: "&#129370",
    text: "Creating your wallet",
    duration: 2000
  },
  {
    emoji: "&#128035",
    text: "Migrating your funds",
    duration: 2000
  },
  {
    emoji: "&#128037",
    text: "Ready to go!",
    duration: 4000
  }
];

const createWallet = () => {
  localStorage.setItem("private", "PRIVATE KEY");
  localStorage.setItem("public", "PUBLIC KEY");
};

const ClaimWalletMigrate = () => {
  createWallet();
  return (
    <>
      <h1>Migrating...</h1>
      <LoadingCycle
        minTime={3000}
        maxTime={15000}
        states={loadingStates}
        urlOnComplete={"/wallet/"}
      />
    </>
  );
};

export default ClaimWalletMigrate;
