import axios from "axios";
import React from "react";

function TransactionTable({ data, refresh }) {
  const handleSend = (id) => {
    axios.put(`http://localhost:8000/Transaction/${id}`).then((res) => {
      refresh();
      console.log(res);
    });
  };
  return (
    <div>
      <table className="Transaction-table">
        <thead>
          <tr>
            <th>Wallet Number</th>
            <th>User Name</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Intrest</th>
            <th>Total Amount</th>
            <th>Transfer Wallet Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.walletNumber}</td>
              <td>{item.userName}</td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.amount}</td>
              <td>{item.totalIntrest || 0}</td>
              <td>{item.amount + (item.totalIntrest || 0)}</td>
              <td>{item.transferWalletNumber}</td>
              <td>
                <div className="actionButton">
                  <button
                    className="approve"
                    onClick={() => handleSend(item.walletNumber)}
                  >
                    {" "}
                    Send
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
