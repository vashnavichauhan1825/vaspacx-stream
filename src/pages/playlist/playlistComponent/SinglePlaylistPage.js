import './singleplaylist.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePlaylistCtx } from 'Context/PlaylistContext'
const SinglePlaylistPage = () => {
    const encodedToken = localStorage.getItem("token")
    const [playlists,setPlaylists]= useState({name:"",videos:[]});
    const {playlistId} =useParams();
    const {playlist,removeVideoHandler }= usePlaylistCtx();

    useEffect(() => {
        (async function () {
         
          try {
            const response = await axios.get(`/api/user/playlists/${playlistId}`, {
              headers: { authorization: encodedToken },
            });
            if (response.status === 200) {
                console.log(response)
              setPlaylists({
                name: response.data.playlist.title,
                videos: response.data.playlist.videos,
              });
             
            }
          } catch (error) {
            console.log(error);
          }
        })();
      }, [playlist]);

      const videoLength = playlists.videos.length

  return (
    <div className='playlist-box'>
    <h1>{playlists.name}</h1>{videoLength? 
    <>
      {playlists.videos.map((video)=>(
        <div className='video-list'>
        <div className='img-cont'>
            <img src={video.thumbnail} />
            </div>
            <span>
                <p>{video.title}</p>
                <small>{video.description}</small>
            </span>
            <i onClick={()=>removeVideoHandler(playlistId, video._id)}  class="fa fa-times" aria-hidden="true"></i>
        </div>
     ) )  }</>:<p>{`your ${playlists.name} playlist is empty !`}</p>}
    </div>
  )
}

export default SinglePlaylistPage