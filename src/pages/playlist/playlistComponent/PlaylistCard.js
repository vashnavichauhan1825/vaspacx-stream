import './singleplaylist.css'
import { useHistoryCtx } from 'Context/HistoryContext';
import { useLikeCtx } from 'Context/LikeContext';
import { useLocation } from 'react-router-dom';

const PlaylistCard = ({video}) => {
  const {removeFromHistory} = useHistoryCtx();
  const {removeLikeHandler} = useLikeCtx();
  const location = useLocation();
  return (
    <div className='video-list' key={video._id}>
    <div className='img-cont'>
        <img src={video.thumbnail} />
        </div>
        <span>
            <p>{video.title}</p>
            <small>{video.description}</small>
        </span>
        {location.pathname === "/history" &&  <i onClick={()=>removeFromHistory(video._id)} class="fa fa-times" aria-hidden="true"></i>}
        {location.pathname === "/liked" && <i onClick={()=>removeLikeHandler(video._id)} class="fa fa-times" aria-hidden="true"></i>}
       
    </div>
  )
}

export default PlaylistCard