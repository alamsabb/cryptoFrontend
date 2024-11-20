import React from "react";
import "./landing.css"; // Import the corresponding CSS file
// import logo from "../../images/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top active" data-section>
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              {/* <img src={logo} width="50" height="50" alt="Cryptex logo" /> */}
              JVM
            </a>
            <h2 className="footer-title">Let's talk! 🤙</h2>
            <a href="tel:+123456789101" className="footer-contact-link">
              +12 345 678 9101
            </a>
            <a href="mailto:JVM" className="footer-contact-link">
              JVM
            </a>
            <address className="footer-contact-link">
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
            </address>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Products</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Spot
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Inverse Perpetual
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                USDT Perpetual
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Exchange
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Launchpad
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Binance Pay
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Services</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Buy Crypto
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Markets
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Trading Fee
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Referral Program
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                API
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Bybit Learn
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                User Feedback
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Submit a request
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                API Documentation
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Trading Rules
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">About Us</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About Bybit
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Authenticity Check
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Business Contacts
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          {/* <p className="copyright">
            &copy; 2024 by{" "}
            <a href="#" className="copyright-link">
              codewithsadee
            </a>
          </p> */}

          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
