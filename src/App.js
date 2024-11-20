import React, { useState } from "react";
import Signup from "./components/Verson/Auth/Signup";
import LadingPage from "./components/Verson/LadingPage";
import Footer from "./components/Verson/Footer";
import Header from "./components/Verson/Header";
import Example from "./components/Verson/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Verson/Auth/Login";
import Dashboard from "./components/Verson/Dashboard/Dashboard";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div>
      <BrowserRouter>
        <Header showModal={handleShow} />
        <Routes>
          <Route path="/" element={<LadingPage showModal={handleShow} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Example onClose={handleClose} showModal={showModal} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
