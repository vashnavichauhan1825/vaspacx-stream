import Navbar from 'components/Navbar/Navbar'
import BgWrapper from 'components/UI/bgWrapper/BgWrapper'
import { VaspacxStreamTitle } from 'components/UI/documentTitle/VaspacxStreamTitle'
import { useVideoContext } from 'Context/ReducerContext'
import PlaylistCard from 'pages/playlist/playlistComponent/PlaylistCard'
import './watchlater.css'

const WatchLater = () => {
  VaspacxStreamTitle("Watch Later")
  const {watchLater}= useVideoContext();
  return (
    <BgWrapper>
      <Navbar/>
      <span className='center'><h1>Watch Later</h1></span>
      {watchLater.length !==0 && <div className='watch-later-section'>
     
        {
          watchLater.map((video)=>{
            return <PlaylistCard video={video}/>
          })
        }
      </div>}{
        watchLater.length ===0 && <span className='sec-clr'><h3>No Videos In Your Watch Later !</h3></span>
      }
    </BgWrapper>
  )
}

export default WatchLater