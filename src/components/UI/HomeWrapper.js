import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./home.css";
import { NavLink } from "react-router-dom";
import Vaspacx from "./logo/Vaspacx";
import TextButton from "./button/TextButton";
const HomeWrapper = ({ children }) => {
  const location = useLocation();
  const layoutValue = location.pathname !== "/signup";
  return (
    <div className={layoutValue? "homeBg": "signupBg"}>
     
      {layoutValue && <Sidebar />}
      {!layoutValue && <div className="login-nav">
        <p>Home</p>
        <TextButton>Logout</TextButton>
      </div>}
      <div className={layoutValue? "main-layout" : "auth-layout"}>
     
      {children}
      {!layoutValue && <Vaspacx/>}
      
      </div>
     
    </div>
  );
};

export default HomeWrapper;
