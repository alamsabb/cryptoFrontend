import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Signup from "./components/Verson/Auth/Signup";
import LandingPage from "./components/Verson/LadingPage";
import Footer from "./components/Verson/Footer";
import Header from "./components/Verson/Header";
import Modal from "./components/Verson/Modal";
import Login from "./components/Verson/Auth/Login";
import Dashboard from "./components/Verson/Dashboard/Dashboard";
import ProtectedRoute from "./components/Verson/ProtectedRoute";
import DashboardAdmin from "./components/Verson/Admin/Dashboard/DashboardAdmin";
import Sidebar from "./components/Verson/Admin/Sidebar/SideBar";
import AdminIntegration from "./components/Verson/Admin/AdminIntegration/AdminIntegration";

function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Check if the current route is an admin route
  const isAdminRoute = location.pathname.startsWith("/Admin");

  return (
    <>
      {!isAdminRoute && <Header showModal={handleShow} />}
      <Modal onClose={handleClose} showModal={showModal} />
      <Routes>
        <Route path="/" element={<LandingPage showModal={handleShow} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/Admin/*"
          element={
            <ProtectedRoute>
              <AdminIntegration />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
