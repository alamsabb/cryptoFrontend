import axios from "axios";
import React from "react";

function RequestTable({ data, refresh }) {
  const HandleApprove = (id) => {
    axios.put(`http://localhost:8000/verify/${id}`).then((res) => {
      refresh();
      console.log(res);
    });
  };
  return (
    <div>
      <table className="Request-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Wallet Number</th>
            <th>Transfer Wallet Number</th>
            <th>Referal Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.fullName}</td>
              <td>{item.userName}</td>
              <td>{item.email}</td>
              <td>{item.amount}</td>
              <td>{item.walletNumber}</td>
              <td>{item.transferWalletNumber}</td>
              <td>{item.referalNumber}</td>
              <td>
                <div className="actionButton">
                  <button
                    className="approve"
                    onClick={() => HandleApprove(item.walletNumber)}
                  >
                    Approve
                  </button>
                  <button className="reject">Reject</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestTable;
