// WalletStats.jsx
import React from "react";
import "./styles/WalletStats.scss";

const WalletStats = () => (
  <div className="wallet-stats">
    <h3>My Wallet</h3>
    <p>€12,433.35</p>
    <div className="stats">
      <div>BTC: 24%</div>
      <div>ETH: 18%</div>
      {/* Add other stats */}
    </div>
  </div>
);

export default WalletStats;
