// Navbar.jsx
import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import "./styles/Navbar.scss";

const Navbar = () => (
  <div className="navbar">
    <FaSearch className="search-icon" />
    <div className="user-info">
      <span>Austin Robertson</span>
      <img src="user-avatar.png" alt="User Avatar" />
    </div>
  </div>
);

export default Navbar;
