import { usePlaylistCtx } from "Context/PlaylistContext";
import { useState } from "react";
import './categorylist.css'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthCtx } from "Context/AuthContext";

const AvatarCont = styled.div`
  border-radius: 50%;
  padding: 0.2rem;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  border: 2px dotted ${(props) => props.color};

  .profile-img{
    width: 35px;
    height: 35px;
}`

const VideoCard = ({video,sideCard}) => {
    const [dropDown, setDropDown] = useState({state:false,videoId:null});
    const {setPlaylistModal}= usePlaylistCtx();
    const {isLoggedIn} =useAuthCtx()
  
  return (
    <div className="video-item" key={video._id}>

              <img className="video-img" alt="" src={video.thumbnail} />
              <div className="video-desc-cont">
                <div className="desc-box">
                  <AvatarCont color={video.thumbnailColor}>
                    <img className="profile-img" src={video.creator} />
                  </AvatarCont>
                  <div className="desc">
                  <Link to={`/videos/${video._id}`}>
                    <h3>{video.title}</h3>
                 {!sideCard &&  <p>{video.description}</p>}
                    </Link>
                    <div>
                      <small>{video.views}</small>
                      <small>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        {video.publish}
                      </small>
                    </div>
                  </div>
                </div>
                <button  className="dropDown-btn"  onClick={()=>{setDropDown({state:true,videoId:video._id})}}> <i
                  className="fa fa-ellipsis-v"
                  aria-hidden="true"
                ></i></button>
                
              </div>
              {dropDown.videoId === video._id && 
               
                <div
                  className="dropdown-list"
                  onClick={()=>{setDropDown({state:false,videoId:null})}}
                >
               {isLoggedIn?<>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>Save To
                    Watch later
                  </li>
                  <li onClick={()=> setPlaylistModal({state:true,video:video})}> 
                    <i className="fa fa-list-ul" aria-hidden="true"></i>Save To
                    Playlist
                  </li>
                  <li>
                    <i className="fa fa-trash" aria-hidden="true"></i>Remove From
                    Watch later
                  </li></>:<Link to="/login"><li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>Save To
                    Watch later
                  </li>
                  <li> 
                    <i className="fa fa-list-ul" aria-hidden="true"></i>Save To
                    Playlist
                  </li>
                  <li>
                    <i className="fa fa-trash" aria-hidden="true"></i>Remove From
                    Watch later
                  </li></Link>}
                </div>
              } 
            
            </div>
  )
}

export default VideoCard