import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";
// import Logo from "../../Assets/logo.svg";
// import home from "../../Assets/home.svg";
// import menu from "../../Assets/menu.svg";
// import orders from "../../Assets/order.svg";
// import settings from "../../Assets/settings.svg";
// import Vectorlogout from "../../Assets/Vectorlogout.png";
// import Vector from "../../Assets/Vector.png";
// import { useDispatch } from "react-redux";
// import { logout } from "../../redux/Slice/OrderSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  // const dispatch = useDispatch();

  const handlePageSelect = (page, route) => {
    setActivePage(page);
    navigate(route); // Navigate to the appropriate route
  };
  useEffect(() => {
    // Set the active page based on the current route path
    const path = location.pathname;

    if (path.includes("/Admin/Home")) setActivePage("Home");
    else if (path.includes("/Admin/Request")) setActivePage("Request");
    else if (path.includes("/Admin/Transaction")) setActivePage("Transaction");
    else setActivePage("Home"); // Default state if no matching path
  }, [location]); // Re-run effect whenever location changes

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.setItem("isAdmin", false);
    // dispatch(logout()); // Dispatch logout action
    navigate("/"); // Redirect to login page
  };
  // const [logoutImage, setLogoutImage] = useState(Vectorlogout); // State for logout image

  return (
    <div className="sidebar">
      <div className="sidebarlogo">
        {/* <img src={Logo} alt="logo" /> */}
        JVM
      </div>
      <ul
        className="sidebar-list"
        style={{ color: "#B1B1B1", fontSize: "20px" }}
      >
        <li
          className={activePage === "Request" ? "active" : ""}
          onClick={() => handlePageSelect("Request", "/Admin/Request")}
        >
          <div className="sidebar-li">
            {/* <img
              src={menu}
              alt="menu"
              className={activePage === "Menu" ? `selectedImg` : ""}
            /> */}
            Request
          </div>
        </li>

        <li
          className={activePage === "Transaction" ? "active" : ""}
          onClick={() => handlePageSelect("Transaction", "/Admin/Transaction")}
        >
          <div className="sidebar-li">
            {/* <img
              src={orders}
              alt="order"
              className={activePage === "Orders" ? `selectedImg` : ""}
            /> */}
            Transaction
          </div>
        </li>

        <li onClick={handleLogout} className="sidebar-logout">
          <div className="sidebar-li">
            <button
            // onMouseEnter={() => setLogoutImage(Vector)} // Change image on hover
            // onMouseLeave={() => setLogoutImage(Vectorlogout)} // Revert back on leave
            >
              {/* <img
                src={logoutImage}
                alt="logout"
                //className={activePage === "Dashboard" ? `selectedImg` : ""}
              /> */}
              Log Out
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
