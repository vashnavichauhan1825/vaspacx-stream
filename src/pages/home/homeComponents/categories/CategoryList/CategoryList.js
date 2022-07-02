import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "./categorylist.css";
import { Link,  useNavigate } from "react-router-dom";
import Modal from "components/UI/modal/Modal";
import { usePlaylistCtx } from "Context/PlaylistContext";
import { useAuthCtx } from "Context/AuthContext";
import { useVideoContext } from "Context/ReducerContext";
import { useHistoryCtx } from "Context/HistoryContext";

const AvatarCont = styled.div`
  border-radius: 50%;
  padding: 0.2rem;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  border: 2px dotted ${(props) => props.color};
`;

const CategoryList = ({ category }) => {
  const [dropDown, setDropDown] = useState({state:false,videoId:null});
const {setPlaylistModal}= usePlaylistCtx();
const navigate= useNavigate();
const {addHistoryHandler} = useHistoryCtx()
const {videos} = useVideoContext()
 const {isLoggedIn} = useAuthCtx();
  useEffect(() => {
    navigate("/")
  }, []);

  return (
  
    <div className="video-section">
      {videos
        .filter((item) => (category ? item.category === category : item))
        .map((video) => {
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
                  <span onClick={()=>addHistoryHandler(video)}>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    </span>
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
           
   
          );
         
        })
       
        }
        
    </div>
     


  );
};

export default CategoryList;
