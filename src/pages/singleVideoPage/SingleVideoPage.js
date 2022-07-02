import BgWrapper from 'components/UI/bgWrapper/BgWrapper';
import { useEffect } from 'react';
import axios from 'axios';
import Modal from 'components/UI/modal/Modal';
import Navbar from '../../components/Navbar/Navbar'
import SideVideos from './videopage components/sidevideos/SideVideos';
import VideoContainer from './videopage components/VideoContainer';
import './videopage.css'
import { useVideoContext } from 'Context/ReducerContext';
import { usePlaylistCtx } from 'Context/PlaylistContext';
import VideoDetail from './videopage components/videodetail/VideoDetail';
import { ToastContainer } from 'react-toastify';
import { VaspacxStreamTitle } from 'components/UI/documentTitle/VaspacxStreamTitle';
const SingleVideoPage = () => {
  const {dispatch} = useVideoContext();
  VaspacxStreamTitle("Watch")
  const {playlistModal} = usePlaylistCtx()
  useEffect(() => {
   
      (async function () {
        try {
          const response = await axios.get("/api/videos");
          if (response.status === 200) {
            dispatch({
              type: "VIDEOS",
              payload: response.data.videos,
            });
           
          }
        } catch (error) {
          console.log(error);
        }
      })();
  }, []);
 
  return (

    
    <BgWrapper>
        <Navbar/>
        <div className='videopage-section'>
        <VideoContainer/>
        <SideVideos/>
       
        </div>
        <ToastContainer/>
       {playlistModal.state && <Modal/>}
    </BgWrapper>
   
  )
}

export default SingleVideoPage;