import React from "react";
import "./style.css";
import { a } from "framer-motion/client";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [next, setNext] = React.useState(false);
  const navigate = useNavigate();
  const toggleView = () => {
    navigate("/login");
  };
  const [formdata, setFormdata] = React.useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    amount: "",
    walletNumber: "",
    transferWalletNumber: "",
    referalNumber: "",
  });
  const onClose = () => {
    setFormdata({
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      amount: "",
      walletNumber: "",
      transferWalletNumber: "",
      referalNumber: "",
    });
    setNext(false);
  };
  const handleOnchange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", formdata)
      .then((res) => {
        console.log(res);
        onClose();
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(formdata);
  };
  const handleOnNext = (e) => {
    e.preventDefault();
    if (formdata.password !== formdata.confirmPassword) {
      alert("Password do not match");
      return;
    }
    setNext(true);
  };
  return (
    <div className="middleContainer">
      <div className="form-container">
        <h2>Sign Up</h2>
        {!next ? (
          <form onSubmit={handleOnNext}>
            <input
              type="text"
              placeholder="Full Name"
              required
              name="fullName"
              value={formdata.fullName}
              onChange={(e) => handleOnchange(e)}
            />
            <input
              type="text"
              placeholder="User Name"
              required
              name="userName"
              value={formdata.userName}
              onChange={(e) => handleOnchange(e)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={formdata.email}
              onChange={(e) => handleOnchange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => handleOnchange(e)}
              name="password"
              value={formdata.password}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              onChange={(e) => handleOnchange(e)}
              value={formdata.confirmPassword}
            />
            <input
              type="number"
              placeholder="Amount Min $100"
              required
              name="amount"
              onChange={(e) => handleOnchange(e)}
              value={formdata.amount}
            />
            <button type="submit">Next</button>
            <p>
              Already have an account?{" "}
              <span className="toggle-link" onClick={toggleView}>
                Login
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="Enter your Wallet Number"
              required
              name="transferWalletNumber"
              value={formdata.transferWalletNumber}
              onChange={(e) => handleOnchange(e)}
            />
            <input
              type="text"
              placeholder="Digital Wallet number if any"
              name="walletNumber"
              value={formdata.walletNumber}
              onChange={(e) => handleOnchange(e)}
            />
            <input
              type="text"
              placeholder="Enter your Refferal Code"
              name="referalNumber"
              value={formdata.referalNumber}
              onChange={(e) => handleOnchange(e)}
              required
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?{" "}
              <span className="toggle-link" onClick={toggleView}>
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signup;
