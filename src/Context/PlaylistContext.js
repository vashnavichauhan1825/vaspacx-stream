import axios from "axios";
import { ErrorToast } from "components/UI/Toast/ErrorToast";
import { SuccessToast } from "components/UI/Toast/SuccessToast";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();

const PlaylistProvider =({children})=>{
    const encodedToken = localStorage.getItem("token")
    const [playlistModal, setPlaylistModal] = useState({
        state:false,
        video:{},
    })
    const [playlist,setPlaylist]= useState([]);

    const addVideoToPlaylist = async (playlistDetails) => {
        
        try {
          const playlistResponse = await axios.post(
            "/api/user/playlists",
            {
              playlist: {
                title: playlistDetails.title,
                description: playlistDetails.description,
              },
            },
            {
              headers: {
                authorization: encodedToken,
              },
            }
          );
    
          if (playlistResponse.status === 201) {
             
              SuccessToast("Playlist Saved !")
            if (Object.keys(playlistModal.video).length === 0) {
              setPlaylist(playlistResponse.data.playlists);
            } else {
             
              try {
               
                const response = await axios.post(
                  `/api/user/playlists/${
                    playlistResponse.data.playlists[
                      playlistResponse.data.playlists.length - 1
                    ]._id
                  }`,
                  { video: playlistModal.video },
                  {
                    headers: {
                      authorization: encodedToken,
                    },
                  }
                );
    
                if (response.status === 201) {
                  SuccessToast("Video Saved To Playlist !")
                  
                  if (playlist.length !== 0) {
                   
                    const index = playlist.findIndex(
                      (p) => p._id === response.data.playlist._id
                    );
                 
                    if (index === -1) {
                      setPlaylist((p) => [...p, response.data.playlist]);
                    } else {
                     
                      setPlaylist((ps) =>
                        ps.map((p) =>
                          p._id === response.data.playlist._id
                            ? response.data.playlist
                            : p
                        )
                      );
                    }
                    
                  } else {
                    setPlaylist([response.data.playlist]);
                  }
                }
              } catch (error) {
                console.log(error);
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
      };

 const removeFromPlaylist =async(id)=>{
    try {
        const response = await axios.delete(`/api/user/playlists/${id}`,{
            headers:{
                authorization:encodedToken,
            },
        });
        if(response.status === 200){
            setPlaylist(response.data.playlists);
           ErrorToast("Playlist Deleted !")
        }
    } catch (error) {
        console.log(error);
    }

   }

   const addVideoHandler= async(id)=>{
    try {
        const response = await axios.post(`/api/user/playlists/${id}`,{
            video:playlistModal.video
        },{
            headers:{authorization:encodedToken}
        });
        if(response.status === 201){
            setPlaylist((pl)=>pl.map((pl)=>pl._id === response.data.playlist._id? response.data.playlist : pl))
          SuccessToast("Video Saved To Playlist !")
        }
    } catch (error) {
        console.log(error);
    }
   }
    
   const removeVideoHandler =async(playlistId,videoId)=>{
    if(!videoId){
        try {
           const response = await axios.delete(`/api/user/playlists/${playlistId}/${playlistModal.video._id}`,
           {headers:{authorization:encodedToken}});
           if(response.status === 200){
            setPlaylist((pl)=>pl.map((v)=> v._id === response.data.playlist._id ? response.data.playlist:v));
            ErrorToast("Video Removed !")
           } 
        } catch (error) {
            console.log(error)
        }
    }else{
        try {
            const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,{
             headers:{authorization:encodedToken}
            });
            if(response.status === 200){
                setPlaylist((pl)=> pl.map((v)=>v._id === response.data.playlist._id ? response.data.playlist : v))
                 ErrorToast("Video Removed !")
              }
        } catch (error) {
           console.log(error) 
        }
    }
   };

   const ctxValue={
    playlistModal,setPlaylistModal,playlist,addVideoToPlaylist,removeFromPlaylist,addVideoHandler,removeVideoHandler
   }

   return (
    <PlaylistContext.Provider value={ctxValue}>
{children}
    </PlaylistContext.Provider>
   )
}

const usePlaylistCtx =()=>useContext(PlaylistContext);

export{usePlaylistCtx,PlaylistProvider}