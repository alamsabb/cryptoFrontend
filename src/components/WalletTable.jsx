// WalletTable.jsx
import React from "react";
import "./styles/WalletTable.scss";

const WalletTable = () => (
  <div className="wallet-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>WETH</td>
          <td>€1,737.38</td>
          <td>-0.57%</td>
          <td>103.65</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default WalletTable;
