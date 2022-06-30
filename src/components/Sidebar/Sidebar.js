import Vaspacx from "components/UI/logo/Vaspacx";
import { useAuthCtx } from "Context/AuthContext";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./sidebar.css";
import rightIcon from './../../assets/img/arrows.png'
import { useState } from "react";
import styled from "styled-components";

const SidebarWrapper = styled.div`
    position: fixed;
    display:inline-block;
    height: 100vh;
    left:${(props)=>props.slide};
    z-index:1;
    width: 300px;
    border-right: 0px solid var(--hue-color);
    backdrop-filter: blur(10px);
    background: #142d2d94;
    --webkit-backdrop-filter: blur(20px);
    box-shadow:-3px 2px 20px 0px #637272;
    padding: 1rem 1rem 1rem 0rem;
    transition:all 0.5s ease-in-out;
`
const Sidebar = () => {
  const [openSideBar, setOpenSidebar]= useState(true)
  const location = useLocation();
  const {isLoggedIn,logout} = useAuthCtx();
  return (
    
      <SidebarWrapper  slide={openSideBar?"-315px":"0px"}>
       <Vaspacx/>

        <ul className="sidebar-list-cont">
          <NavLink to="/">
            <li
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              {location.pathname === "/" && <div className="active-item"></div>}
              <i className="fa fa-home"></i>
              <span>Home</span>
            </li>
          </NavLink>
          <NavLink to="/liked">
            <li
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              {location.pathname === "/liked" && (
                <div className="active-item"></div>
              )}
              <i className="fa fa-thumbs-up"></i>
              <span>Liked</span>
            </li>
          </NavLink>
          <NavLink to="/playlist">
            <li
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              {location.pathname === "/playlist" && (
                <div className="active-item"></div>
              )}
              <i className="fa fa-list"></i>
              <span>Playlist</span>
            </li>
          </NavLink>
          <NavLink to="/history">
            <li
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              {location.pathname === "/history" && (
                <div className="active-item"></div>
              )}
              <i className="fa fa-history"></i>
              <span>History</span>
            </li>
          </NavLink>
          <NavLink to="/watchlater">
            <li
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              {location.pathname === "/watchlater" && (
                <div className="active-item"></div>
              )}
              <i className="fa fa-clock-o"></i>
              <span>Watch Later</span>
            </li>
          </NavLink>
        </ul>
        <ul className="sidebar-login-box">
        {!isLoggedIn? <Link to="/login"><li><i class="fa fa-user" aria-hidden="true"></i><span>Account</span></li></Link>:
         <li onClick={logout}><i class="fa fa-sign-out" aria-hidden="true"></i><span>Logout</span></li>}
        </ul>
        <img onClick={()=>setOpenSidebar(prev =>!prev)} className="rightIcon" src={rightIcon}/>
      </SidebarWrapper>
  
  );
};

export default Sidebar;
