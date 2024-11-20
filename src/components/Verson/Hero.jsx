import React from "react";
import "./landing.css"; // Import the corresponding CSS file

import herobanner from "../../images/hero-banner.png";

const Hero = ({ showModal }) => {
  const started = () => {
    showModal();
  };
  return (
    <section className="section hero active" aria-label="hero" data-section>
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">Your Crypto Wallet is Here</h1>
          <p className="hero-text">
            JVM is the easiest, safest, and fastest way to buy & sell crypto
            asset exchange.
          </p>
          <a onClick={started} className="btn btn-primary">
            Get started now
          </a>
        </div>
        <figure className="hero-banner">
          <img
            src={herobanner}
            width="570"
            height="448"
            alt="hero banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
