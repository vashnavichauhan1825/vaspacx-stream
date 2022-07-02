import SecondayButton from 'components/UI/button/SecondayButton'
import { useLikeCtx } from 'Context/LikeContext'
import { useVideoContext } from 'Context/ReducerContext'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import './videodetail.css'

const AvatarCont = styled.div`
  border-radius: 50%;
  padding: 0.2rem;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width:50px;
  border: 2px dotted ${(props) => props.color};

  .profile-img{
    width: 50px;
    height: 50px;
}`



const VideoDetail = () => {
   const {videos,like} =useVideoContext();
   const {addLikeHandler , removeLikeHandler} =useLikeCtx();
   const {videoId} =useParams();
  return (
   videos.filter((video)=> video._id === videoId).map((video)=>{
    return(
    <div className='detail-section'>
      <div className='avatar-box'>
             <AvatarCont color={video.thumbnailColor}>
                    <img className="profile-img" src={video.creator} />
                  </AvatarCont>
        <span className='video-name'>
            <h1>{video.title}</h1>
            <p>{video.views}</p>
        </span>
        </div>
        <span className='btn-cont'>
        {like.some((v) => v._id === video._id) ? (
            <button className='pri-btn remove-like' onClick={()=>removeLikeHandler(video._id)}>Like <i class="fa fa-heart" aria-hidden="true"></i></button>):(<button  className='pri-btn' onClick={()=>addLikeHandler(video)}>Like <i class="fa fa-heart" aria-hidden="true"></i></button>)}
            <SecondayButton>Share <i class="fa fa-share" aria-hidden="true"></i>
</SecondayButton>
        </span>
    </div>
    )
   }) 
  )
}

export default VideoDetail