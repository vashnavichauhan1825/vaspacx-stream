import { useParams } from "react-router-dom";
import "./videocont.css";
import VideoDetail from "./videodetail/VideoDetail";
const VideoContainer = () => {
  const { videoId } = useParams();
  return (
    <div>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <VideoDetail/>
    </div>
  );
};

export default VideoContainer;
