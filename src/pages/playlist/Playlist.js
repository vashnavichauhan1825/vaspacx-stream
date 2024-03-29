import './playlist.css'
import { Link } from 'react-router-dom'
import { usePlaylistCtx } from 'Context/PlaylistContext'
import Navbar from 'components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import BgWrapper from 'components/UI/bgWrapper/BgWrapper';
import { VaspacxStreamTitle } from 'components/UI/documentTitle/VaspacxStreamTitle';
import Modal from 'components/UI/modal/Modal';
const Playlist = () => {
  VaspacxStreamTitle("Playlists")
  const {playlist,removeFromPlaylist}=usePlaylistCtx()
    const playlistLength =playlist.length;
    const {setPlaylistModal,playlistModal}=usePlaylistCtx();
  return (
   <BgWrapper>
    <Navbar/>
  <div className='playlist-cont'>
  <div className='single-playlist'>
  <h3 className='create-Playlist-h'>Create Playlist</h3>
   <div className='playlist-hover'>
   <i  onClick={() => setPlaylistModal({ state: true, video: {} })} class="fa fa-plus" aria-hidden="true"></i>
   </div>
  </div>
  {playlistLength?
  <>
  
    {playlist.map((playlist)=>{
     
      return(
        <div key={playlist._id} className='single-playlist'>
       
       {playlist.videos.length !==0 && <img src={playlist.videos[0].thumbnail}/>}
        <small>{playlist.description}</small>
        <h3>{playlist.title}</h3>
        <i onClick={()=>removeFromPlaylist(playlist._id)} className="fa fa-trash" aria-hidden="true"></i>
      <div className='playlist-hover'>
      <Link to={`/playlist/${playlist._id}`}><i class="fa fa-play-circle-o" aria-hidden="true"></i></Link>
      </div>
     </div>
      )
    })}</>: <span className='h1-pri'><h1>your playlist section is empty !</h1></span>}
    </div>
    <ToastContainer/>
    {playlistModal.state && <Modal/>}
</BgWrapper>
  )
}

export default Playlist