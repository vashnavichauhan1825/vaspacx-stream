import { NavLink, useLocation } from "react-router-dom";
import "./sidebar.css";


const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <div className="sidebar">
        <span className="vaspacx">
          <span className="clr-text">vaspac</span>
          <i className="fa fa-xing clr-hue" aria-hidden="true"></i>
          <span className="clr-hue">stream</span>
        </span>
        <ul className="sidebar-list-cont">
        <NavLink to="/">
          <li className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          {location.pathname === "/"  &&  <div className='active-item'></div> }
            <i className="fa fa-home"></i>
            <span>Home</span>
          </li>
          </NavLink>
          <NavLink to="/liked">
          <li className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          {location.pathname === "/liked"  &&  <div className='active-item'></div> }
            <i className="fa fa-thumbs-up"></i>
            <span>Liked</span>
          </li>
          </NavLink>
          <NavLink to="/playlist">
          <li className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          {location.pathname === "/playlist"  &&  <div className='active-item'></div> }
            <i className="fa fa-list"></i>
            <span>Playlist</span>
          </li>
          </NavLink>
          <NavLink to="/history">
          <li className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          {location.pathname === "/history"  &&  <div className='active-item'></div> }
            <i className="fa fa-history"></i>
            <span>History</span>
          </li>
          </NavLink>
          <NavLink to="/watchlater">
          <li className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          {location.pathname === "/watchlater"  &&  <div className='active-item'></div> }
            <i className="fa fa-clock-o"></i>
            <span>Watch Later</span>
          </li>
          </NavLink>
        
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
