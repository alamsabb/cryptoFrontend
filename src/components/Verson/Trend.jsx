import React from "react";
import "./landing.css"; // Import the corresponding CSS file
import img1 from "../../images/coin-1.svg";
import img2 from "../../images/coin-2.svg";
import img3 from "../../images/coin-3.svg";
import img4 from "../../images/coin-4.svg";

const Trend = () => {
  const trends = [
    {
      id: 1,
      imgSrc: img1,
      alt: "bitcoin logo",
      title: "Bitcoin",
      pair: "BTC/USD",
      value: "46,168.95",
      currentPrice: "36,641.20",
      badge: { type: "red", value: "-0.79%" },
    },
    {
      id: 2,
      imgSrc: img2,
      alt: "ethereum logo",
      title: "Ethereum",
      pair: "ETH/USD",
      value: "3,480.04",
      currentPrice: "36,641.20",
      badge: { type: "green", value: "+10.55%" },
      isActive: true,
    },
    {
      id: 3,
      imgSrc: img3,
      alt: "tether logo",
      title: "Tether",
      pair: "USDT/USD",
      value: "1.00",
      currentPrice: "36,641.20",
      badge: { type: "red", value: "-0.01%" },
    },
    {
      id: 4,
      imgSrc: img4,
      alt: "bnb logo",
      title: "BNB",
      pair: "BNB/USD",
      value: "443.56",
      currentPrice: "36,641.20",
      badge: { type: "red", value: "-1.24%" },
    },
  ];

  const tabs = [
    "Crypto",
    "DeFi",
    "BSC",
    "NFT",
    "Metaverse",
    "Polkadot",
    "Solana",
    "Opensea",
    "Makersplace",
  ];

  return (
    <section
      className="section trend active"
      aria-label="crypto trend"
      data-section
    >
      <div className="container">
        <div className="trend-tab">
          {/* Tabs Navigation */}
          <ul className="tab-nav">
            {tabs.map((tab, index) => (
              <li key={index}>
                <button className={`tab-btn ${index === 0 ? "active" : ""}`}>
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <ul className="tab-content">
            {trends.map((trend) => (
              <li key={trend.id}>
                <div className={`trend-card ${trend.isActive ? "active" : ""}`}>
                  <div className="card-title-wrapper">
                    <img
                      src={trend.imgSrc}
                      width="24"
                      height="24"
                      alt={trend.alt}
                    />
                    <a href="#" className="card-title">
                      {trend.title} <span className="span">{trend.pair}</span>
                    </a>
                  </div>
                  <data className="card-value" value={trend.value}>
                    USD {trend.value}
                  </data>
                  <div className="card-analytics">
                    <data className="current-price" value={trend.currentPrice}>
                      {trend.currentPrice}
                    </data>
                    <div className={`badge ${trend.badge.type}`}>
                      {trend.badge.value}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trend;
