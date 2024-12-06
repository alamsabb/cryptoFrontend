import React, { useEffect } from "react";
import TransactionTable from "./TransactionTable";
import axios from "axios";
import "./transaction.css";

function TransactionIntegration() {
  const [transaction, setTransaction] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    axios.get("http://localhost:8000/Transaction").then((res) => {
      console.log(res);
      setTransaction(res.data.dataStored);
    });
  }, [refresh]);

  return (
    <div>
      <h1>Transaction</h1>
      <div className="table">
        <TransactionTable data={transaction} refresh={handleRefresh} />
      </div>
    </div>
  );
}

export default TransactionIntegration;
