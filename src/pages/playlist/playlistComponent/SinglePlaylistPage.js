import './singleplaylist.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePlaylistCtx } from 'Context/PlaylistContext'
const SinglePlaylistPage = () => {
    const encodedToken = localStorage.getItem("token")
    const [playlists,setPlaylists]= useState({name:"",videos:[]});
    const {playlistId} =useParams();
    const {playlist}= usePlaylistCtx();

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

  return (
    <div className='playlist-box'>
    <h1>{playlists.name}</h1>
      {playlists.videos.map((video)=>(
        <div className='video-list'>
        <div className='img-cont'>
            <img src={video.thumbnail} />
            </div>
            <span>
                <p>{video.title}</p>
                <small>{video.description}</small>
            </span>
        </div>
     ) )  }
        {/* <div className='video-list'>
        <div className='img-cont'>
            <img src={imgPlay} />
            </div>
            <span>
                <p>Dikshant - Aankhon Se Batana (Official Audio)</p>
                <small>Hello, Happy Valentine's Day ! ❤ Two years ago, Dikshant and his brother  Yash Jadhav used to sit down every evening but one day</small>
            </span>
        </div>
        <div className='video-list'>
        <div className='img-cont'>
            <img src={imgPlay} />
            </div>
            <span>
                <p>Dikshant - Aankhon Se Batana (Official Audio)</p>
                <small>Hello, Happy Valentine's Day ! ❤ Two years ago, Dikshant and his brother  Yash Jadhav used to sit down every evening but one day</small>
            </span>
        </div> */}
    </div>
  )
}

export default SinglePlaylistPage