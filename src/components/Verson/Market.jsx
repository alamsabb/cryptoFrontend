import React, { useState } from "react";
import "./landing.css"; // Import the corresponding CSS file
import img1 from "../../images/coin-1.svg";
import img2 from "../../images/coin-2.svg";
import img3 from "../../images/coin-3.svg";
import img4 from "../../images/coin-4.svg";

// import imgcrt1 from "../../images/chart-1.svg";
// import imgcrt2 from "../../images/chart-2.svg";
const MarketUpdate = () => {
  const [activeTab, setActiveTab] = useState("View All");

  const tabs = [
    "View All",
    "Metaverse",
    "Entertainment",
    "Energy",
    "NFT",
    "Gaming",
    "Music",
  ];

  const coinsData = [
    {
      id: 1,
      rank: 1,
      name: "Bitcoin",
      symbol: "BTC",
      lastPrice: "$56,623.54",
      change: "+1.45%",
      changeType: "green",
      marketCap: "$880,423,640,582",
      chartSrc: "ok",
      logo: img1,
    },
    {
      id: 2,
      rank: 2,
      name: "Ethereum",
      symbol: "ETH",
      lastPrice: "$3,210.78",
      change: "-5.12%",
      changeType: "red",
      marketCap: "$410,223,640,582",
      chartSrc: "ok",
      logo: img2,
    },
    // Add more coin data here...
  ];

  return (
    <section className="section market" aria-label="market update">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Market Update</h2>
          <a href="#" className="btn-link">
            See All Coins
          </a>
        </div>

        <div className="market-tab">
          {/* Tab Navigation */}
          <ul className="tab-nav">
            {tabs.map((tab) => (
              <li key={tab}>
                <button
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          {/* Market Table */}
          <table className="market-table">
            <thead className="table-head">
              <tr className="table-row table-title">
                <th className="table-heading"></th>
                <th className="table-heading" scope="col">
                  #
                </th>
                <th className="table-heading" scope="col">
                  Name
                </th>
                <th className="table-heading" scope="col">
                  Last Price
                </th>
                <th className="table-heading" scope="col">
                  24h %
                </th>
                <th className="table-heading" scope="col">
                  Market Cap
                </th>
                <th className="table-heading" scope="col">
                  Last 7 Days
                </th>
                <th className="table-heading"></th>
              </tr>
            </thead>

            <tbody className="table-body">
              {coinsData.map((coin) => (
                <tr className="table-row" key={coin.id}>
                  <td className="table-data">
                    <button
                      className="add-to-fav"
                      aria-label="Add to favourite"
                      onClick={() =>
                        console.log(`Added ${coin.name} to favorites`)
                      }
                    >
                      <ion-icon
                        name="star-outline"
                        className="icon-outline"
                      ></ion-icon>
                      <ion-icon name="star" className="icon-fill"></ion-icon>
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">
                    {coin.rank}
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        src={coin.logo}
                        width="20"
                        height="20"
                        alt={`${coin.name} logo`}
                        className="img"
                      />
                      <h3>
                        <a href="#" className="coin-name">
                          {coin.name}{" "}
                          <span className="span">{coin.symbol}</span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">{coin.lastPrice}</td>
                  <td className={`table-data last-update ${coin.changeType}`}>
                    {coin.change}
                  </td>
                  <td className="table-data market-cap">{coin.marketCap}</td>
                  <td className="table-data">
                    <img
                      src={coin.chartSrc}
                      width="100"
                      height="40"
                      alt="chart"
                      className="chart"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketUpdate;
