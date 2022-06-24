import React, { useEffect, useState } from "react";
import { useListingContext } from "../../../../../Context/ListingContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./categorylist.css";
import avatarOne from './../../../../../assets/img/avatarOne.png';

const CategoryList = ({category}) => {
  const [listItem, setListItem] = useState([]);

  useEffect(()=>{
    (async function(){
      try {
        const responseData = await axios.get("/api/videos");
        if(responseData.status === 200){
          setListItem(responseData.data.videos);
        }
      } catch (error) {
        console.log(error)
      }
    })();
},[]);


  return (

    <div className="video-section">

     {listItem.filter((item)=> (category ? item.category === category : item)).map((video)=>{
      return(
        <div className="video-item" key={video._id}>
        <img
          className="video-img"
          alt=""
          src={video.thumbnail}
        />
        <div className="video-desc-cont">
          <div className="desc-box">
            <div className="bdr-hue">
              <img className="profile-img" src={avatarOne} />
            </div>
            <div className="desc">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <div>
                <small>{video.views}</small>
                <small><i class="fa fa-circle" aria-hidden="true"></i> {video.publish}</small>
              </div>
            </div>
          </div>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </div>
      )
     })}
     </div>
      );
};

export default CategoryList;
