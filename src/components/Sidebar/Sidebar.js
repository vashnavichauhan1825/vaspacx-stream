import "./sidebar.css";


const Sidebar = () => {
    
  return (
    <>
      <div className="sidebar">
        <span className="vaspacx">
          <span className="clr-text">vaspac</span>
          <i className="fa fa-xing clr-hue" aria-hidden="true"></i>
          <span className="clr-hue">stream</span>
        </span>
        <ul className="sidebar-list-cont">
          <li>
          <div className="hover-item"></div>
            <i className="fa fa-home"></i>
            <span>Home</span>
          </li>
          <li>
          
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            <span>Liked</span>
          </li>
          <li>
          
            <i className="fa fa-list" aria-hidden="true"></i>
            <span>Playlist</span>
          </li>
          <li>
            <i className="fa fa-history" aria-hidden="true"></i>
            <span>Liked</span>
          </li>
          <li>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <span>Watch Later</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
