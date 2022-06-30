import './playlist.css'
import imgPLaylist from './../../assets/img/aurora.jpg'
import { Link } from 'react-router-dom'
import { usePlaylistCtx } from 'Context/PlaylistContext'

const Playlist = () => {

  const {playlist,removeFromPlaylist}=usePlaylistCtx()
 
  return (
    <div className='playlist-cont'>
    {playlist.map((playlist)=>{
      return(
        <div key={playlist._id} className='single-playlist'>
      
        <h3>{playlist.title}</h3>
        <i onClick={()=>removeFromPlaylist(playlist._id)} className="fa fa-trash" aria-hidden="true"></i>
      <div className='playlist-hover'>
      <Link to={`/playlist/${playlist._id}`}><i class="fa fa-play-circle-o" aria-hidden="true"></i></Link>
      </div>
     </div>
      )
    })}
    
     {/* <div className='single-playlist'>
      <img src={imgPLaylist}/>
      <div className='playlist-hover'>
      <i class="fa fa-play-circle-o" aria-hidden="true"></i>
      </div>
     </div>
     <div className='single-playlist'>
      <img src={imgPLaylist}/>
      <div className='playlist-hover'>
      <i class="fa fa-play-circle-o" aria-hidden="true"></i>
      </div>
     </div> */}
    </div>
  )
}

export default Playlist