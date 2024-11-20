import React, { useEffect, useState } from "react";
import "./landing.css"; // Import the corresponding CSS file
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ showModal }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const handleOnclick = () => {
    const email = localStorage.getItem("email");
    if (!email) {
      showModal();
    }
    if (email) {
      navigate("/dashboard");
    }
  };
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate("/");
  };

  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("wallet");
    localStorage.removeItem("transferWallet");
    window.location.reload();
  };
  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(email);
    if (!email) {
      setIsLogged(false);
    }
    if (email) {
      setIsLogged(true);
    }
  }, [location]);
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" onClick={handleNavigate} className="logo">
          {/* <img src={logo} width="32" height="32" alt="Cryptex logo" /> */}
          JVM
        </a>

        <nav
          className={`navbar ${isNavbarVisible ? "active" : ""}`}
          data-navbar
        >
          <ul className="navbar-list">
            <li className="navbar-item">
              <a
                href="#"
                onClick={handleNavigate}
                className="navbar-link active"
                data-nav-link
              >
                Homepage
              </a>
            </li>
            {/* <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link>
                Buy Crypto
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link>
                Markets
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link>
                Sell Crypto
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link>
                Blog
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link>
                BITUSDT
              </a>
            </li> */}
            {isLogged && (
              <li className="navbar-item">
                <a
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                  className="navbar-link"
                  data-nav-link
                >
                  LogOut
                </a>
              </li>
            )}
          </ul>
        </nav>

        <button
          className="nav-toggle-btn"
          aria-label="Toggle menu"
          data-nav-toggler
          onClick={toggleNavbar}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <a onClick={handleOnclick} className="btn btn-outline">
          Wallet
        </a>
      </div>
    </header>
  );
};

export default Header;
