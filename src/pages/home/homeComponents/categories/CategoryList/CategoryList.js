import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from "axios";
import "./categorylist.css";

const AvatarCont = styled.div`
    border-radius: 50%;
    padding: 0.2rem;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    border: 2px dotted ${(props)=> props.color};
`

const CategoryList = ({ category }) => {
  const [listItem, setListItem] = useState([]);

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
                        <i class="fa fa-circle" aria-hidden="true"></i> {video.publish}
                      </small>
                    </div>
                  </div>
                </div>
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CategoryList;
