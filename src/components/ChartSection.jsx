// ChartSection.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import "./styles/ChartSection.scss";

const ChartSection = () => {
  const data = {
    labels: ["05/05", "13/05", "20/05", "28/05", "05/06"],
    datasets: [
      {
        data: [2000, 4500, 3500, 5000, 3400],
        borderColor: "#FFA500",
        fill: true,
        backgroundColor: "rgba(255, 165, 0, 0.2)",
      },
    ],
  };

  return (
    <div className="chart-section">
      <h3>Wallet Balance</h3>
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};

export default ChartSection;
