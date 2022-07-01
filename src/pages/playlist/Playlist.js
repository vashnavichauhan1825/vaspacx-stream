import './playlist.css'
import { Link } from 'react-router-dom'
import { usePlaylistCtx } from 'Context/PlaylistContext'
import Navbar from 'components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
const Playlist = () => {

  const {playlist,removeFromPlaylist}=usePlaylistCtx()
    const playlistLength =playlist.length;
  return (
    <>
    <Navbar/>
  <div className='playlist-cont'>{playlistLength?
  <>
    {playlist.map((playlist)=>{
     
      return(
        <div key={playlist._id} className='single-playlist'>
        {console.log(playlist)}
       {playlist.videos.length !==0 && <img src={playlist.videos[0].thumbnail}/>}
        <small>{playlist.description}</small>
        <h3>{playlist.title}</h3>
        <i onClick={()=>removeFromPlaylist(playlist._id)} className="fa fa-trash" aria-hidden="true"></i>
      <div className='playlist-hover'>
      <Link to={`/playlist/${playlist._id}`}><i class="fa fa-play-circle-o" aria-hidden="true"></i></Link>
      </div>
     </div>
      )
    })}</>: <h1>your playlist section is empty !</h1>}
    </div>
    <ToastContainer/>
</>
  )
}

export default Playlist