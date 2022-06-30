import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./home.css";
import { NavLink } from "react-router-dom";
import Vaspacx from "./logo/Vaspacx";
import TextButton from "./button/TextButton";
import { useAuthCtx } from "Context/AuthContext";
const HomeWrapper = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuthCtx();
  let layoutValue = true;

  if (location.pathname === "/signup") {
    layoutValue = false;
  } else if (location.pathname === "/login") {
    layoutValue = false;
  }

  return (
    <>
      {!layoutValue && (
        <div className="signupBg">
         
          <div className="login-nav">
            <Link to="/">
              <p>Home</p>
            </Link>
            <button
              className="text-button"
              onClick={() => (isLoggedIn ? logout() : navigate("/login"))}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
          <div className="auth-layout">{children}
          <Vaspacx/>
          </div>
        </div>
      )}
      {layoutValue && 
        <div className="main-layout">
        <Sidebar />
        {children}
      </div>
      }
    </>
  );
};

export default HomeWrapper;
