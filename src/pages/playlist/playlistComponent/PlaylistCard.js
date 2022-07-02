import './singleplaylist.css'
import { useHistoryCtx } from 'Context/HistoryContext';
import { useLikeCtx } from 'Context/LikeContext';
import { useLocation } from 'react-router-dom';
import { useWatchLaterCtx } from 'Context/WatchLaterContext';
import { Link } from 'react-router-dom';
const PlaylistCard = ({video}) => {
  const {removeFromHistory} = useHistoryCtx();
  const {removeLikeHandler} = useLikeCtx();
  const {removeFromWatchLater}= useWatchLaterCtx();
  const location = useLocation();
  return (
    <div className='video-list' key={video._id}>
    <div className='img-cont'>
        <img src={video.thumbnail} />
        </div>
        <Link to={`/videos/${video._id}`}>
        <span>
            <p>{video.title}</p>
            <small>{video.description}</small>
        </span>
        </Link>
        {location.pathname === "/history" &&  <i onClick={()=>removeFromHistory(video._id)} class="fa fa-times" aria-hidden="true"></i>}
        {location.pathname === "/liked" && <i onClick={()=>removeLikeHandler(video._id)} class="fa fa-times" aria-hidden="true"></i>}
        {location.pathname === "/watchlater" && <i onClick={()=>removeFromWatchLater(video._id)} class="fa fa-times" aria-hidden="true"></i>}
    </div>
  )
}

export default PlaylistCard