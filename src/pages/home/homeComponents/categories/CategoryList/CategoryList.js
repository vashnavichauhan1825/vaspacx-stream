import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "./categorylist.css";
import Modal from "components/UI/modal/Modal";
import { usePlaylistCtx } from "Context/PlaylistContext";
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
`;

const CategoryList = ({ category }) => {
  const [listItem, setListItem] = useState([]);
  const [dropDown, setDropDown] = useState(false);
const {setPlaylistModal,removeVideoHandler,playlistModal}= usePlaylistCtx();
 const {isLoggedIn} = useAuthCtx();
  useEffect(() => {
    (async function () {
      try {
        const responseData = await axios.get("/api/videos");
        if (responseData.status === 200) {
          setListItem(responseData.data.videos);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
  
    <div className="video-section">
      {listItem
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
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <div>
                      <small>{video.views}</small>
                      <small>
                        <i className="fa fa-circle" aria-hidden="true"></i>{" "}
                        {video.publish}
                      </small>
                    </div>
                  </div>
                </div>
                <button  className="dropDown-btn"  onClick={()=>{setDropDown(prev=>!prev)}}> <i
                  className="fa fa-ellipsis-v"
                  aria-hidden="true"
                ></i></button>
                {dropDown && (
                <div
                  className="dropdown-list"
                  onClick={()=>{setDropDown(prev=>!prev)}}
                >
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
                  </li>
                </div>
              )}
              </div>
             
            </div>
          );
        })
       
        }
           
    </div>
     


  );
};

export default CategoryList;
