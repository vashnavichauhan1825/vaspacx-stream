import { useVideoContext } from 'Context/ReducerContext'
import './sidevideos.css'
import styled from 'styled-components';
import VideoCard from 'pages/home/homeComponents/categories/CategoryList/VideoCard';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
}
`;

const SideVideos = () => {
    const {videos} = useVideoContext();
   
    const shuffeledVideo = [...videos].sort(()=> 0.5-Math.random()).slice(0,3)
  
  return (
    <div className='sideVideos-cont'>
       <h4>Related Videos</h4>
        {shuffeledVideo.map((video)=>{
            return (
                <VideoCard sideCard={true} video={video}/>
            )
        })}
    </div>
  )
}

export default SideVideos