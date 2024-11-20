import React from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formdata, setFormdata] = React.useState({
    email: "",
    password: "",
  });
  const onClose = () => {
    setFormdata({
      email: "",
      password: "",
    });
  };
  const navigate = useNavigate();
  const toggleView = () => {
    navigate("/signup");
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", formdata)
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          "transferWallet",
          res.data.response.transferWalletNumber
        );
        localStorage.setItem("wallet", res.data.response.walletNumber);
        localStorage.setItem("email", res.data.response.email);
        navigate("/dashboard");
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <div className="middleContainer">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleOnSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <span className="toggle-link" onClick={toggleView}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
