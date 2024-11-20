// Sidebar.jsx
import React from "react";
import { FaWallet, FaChartPie } from "react-icons/fa";
import "./styles/Sidebar.scss";

const Sidebar = () => (
  <div className="sidebar">
    <h2 className="logo">Extej</h2>
    <ul className="menu">
      <li className="active">
        <FaWallet /> Wallet
      </li>
      <li>
        <FaChartPie /> Charts
      </li>
      {/* Add other items */}
    </ul>
  </div>
);

export default Sidebar;
