import { useParams } from "react-router-dom";
import "./videocont.css";
const VideoContainer = () => {
  const { videoId } = useParams();
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default VideoContainer;
