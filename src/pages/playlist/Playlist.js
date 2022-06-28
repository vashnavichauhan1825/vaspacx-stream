import './playlist.css'
import imgPLaylist from './../../assets/img/aurora.jpg'
import { Link } from 'react-router-dom'

const Playlist = () => {
  return (
    <div className='playlist-cont'>
     <div className='single-playlist'>
      <img src={imgPLaylist}/>
      <div className='playlist-hover'>
      <Link to="/singleplaylist"><i class="fa fa-play-circle-o" aria-hidden="true"></i></Link>
      </div>
     </div>
     <div className='single-playlist'>
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
     </div>
    </div>
  )
}

export default Playlist