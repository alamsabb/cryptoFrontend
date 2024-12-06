import React from "react";
import Sidebar from "../Sidebar/SideBar";
import "./Integration.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import RequestIntegration from "../Request/RequestIntegration";
import TransactionIntegration from "../Transaction/TransactionIntegration";

function AdminIntegration() {
  const navigate = useNavigate();
  if (
    !localStorage.getItem("isAdmin") ||
    localStorage.getItem("isAdmin") === "false"
  ) {
    navigate("/");
  }
  return (
    <div className="Integration">
      <div className="leftContent">
        <Sidebar />
      </div>
      <div className="rightContent">
        <Routes>
          <Route path="Home" element={<h1>Home</h1>} />
          <Route path="Request" element={<RequestIntegration />} />
          <Route path="Transaction" element={<TransactionIntegration />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminIntegration;
