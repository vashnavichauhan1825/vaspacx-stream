import './singleplaylist.css'
import { useHistoryCtx } from 'Context/HistoryContext';

const PlaylistCard = ({video}) => {
  const {removeFromHistory} = useHistoryCtx();
    
  return (
    <div className='video-list' key={video._id}>
    <div className='img-cont'>
        <img src={video.thumbnail} />
        </div>
        <span>
            <p>{video.title}</p>
            <small>{video.description}</small>
        </span>
        <i onClick={()=>removeFromHistory(video._id)} class="fa fa-times" aria-hidden="true"></i>
    </div>
  )
}

export default PlaylistCard