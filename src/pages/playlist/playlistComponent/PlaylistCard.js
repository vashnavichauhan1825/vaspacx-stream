import './singleplaylist.css'


const PlaylistCard = () => {
    
  return (
    <div className='video-list'>
    <div className='img-cont'>
        <img src={video.img} />
        </div>
        <span>
            <p>{video.title}</p>
            <small>{video.description}</small>
        </span>
    </div>
  )
}

export default PlaylistCard