import Navbar from "components/Navbar/Navbar";
import BgWrapper from "components/UI/bgWrapper/BgWrapper";
import { useVideoContext } from "Context/ReducerContext"
import { ToastContainer } from 'react-toastify';
import PlaylistCard from "pages/playlist/playlistComponent/PlaylistCard";
import './like.css'
import { VaspacxStreamTitle } from "components/UI/documentTitle/VaspacxStreamTitle";

const Like = () => {
  const {like}= useVideoContext();
  VaspacxStreamTitle("Liked")
  const likedVideoLength = like.length;
  return (
    <BgWrapper>
      <Navbar/>
      <span className="like-heading"> <h1>Liked Videos</h1></span>
      {likedVideoLength? <div className="like-section">
     {like.map((video)=>{
      return <PlaylistCard video={video}/>
     })}
      </div>: <span className="center"><h3>you have no liked videos !</h3></span>}
      <ToastContainer/>
    </BgWrapper>
  )
}

export default Like