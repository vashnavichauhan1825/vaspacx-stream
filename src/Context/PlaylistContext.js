import axios from "axios";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();

const PlaylistProvider =({children})=>{
    const encodedToken = localStorage.getItem("token")
    const [playlistModal, setPlaylistModal] = useState({
        state:false,
        video:{},
    })
    const [playlist,setPlaylist]= useState([]);

    // const addVideoToPlaylist = async(playlistInfo)=>{
    //     try {
    //         const response = await axios.post("/api/user/playlists",{
    //             playlist:{
    //                 title:playlistInfo.title,
    //                 description:playlistInfo.desc
    //             },
    //         },
    //             {
    //                 headers:{
    //                     authorization:encodedToken
    //                 }
    //             }
    //         );
    //         if(response.status === 201){
            
    //             if(Object.keys(playlistModal.video).length === 0){
    //                 setPlaylist(response.data.playlists);
    //             }
    //         }else{
    //             try {
    //                 const res = await axios.post(`/api/user/playlists/${response.data.playlists[response.data.playlists.length - 1]._id}`,
    //                 {video:playlistModal.video},
    //                 {
    //                     headers:{
    //                         authorization:encodedToken,
    //                     },
    //                 });
    //                 if(res.status === 201){
    //                     if(playlist.length !== 0){
    //                         const index = playlist.findIndex((video)=>video._id === res.data.playlist._id)
    //                         if(index === -1){
    //                             setPlaylist((v)=>[...v,res.data.playlist])
    //                         }else{
    //                             setPlaylist((pl)=> pl.map((v)=> v.id === res.data.playlist._id ? res.data.playlist:v))
    //                         }
    //                     }else{
    //                       setPlaylist([res.data.playlist])  
    //                     }
    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // } 
    const addVideoToPlaylist = async (playlistDetails) => {
        // creating new playlist
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
            // checking if add to playlist was clicked on video or not
              console.log("playlist",playlistResponse.data)
            if (Object.keys(playlistModal.video).length === 0) {
              setPlaylist(playlistResponse.data.playlists);
            } else {
              // if it was clicked on video
              try {
                // taking the id of playlist in which video will go
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
                   console.log(response)
                  
                  if (playlist.length !== 0) {
                    // checking if playlist is already in array or not
                    const index = playlist.findIndex(
                      (p) => p._id === response.data.playlist._id
                    );
                    // playlist is not in array then
                    if (index === -1) {
                      setPlaylist((p) => [...p, response.data.playlist]);
                    } else {
                      // if its in array then
                      setPlaylist((ps) =>
                        ps.map((p) =>
                          p._id === response.data.playlist._id
                            ? response.data.playlist
                            : p
                        )
                      );
                    }
                    // if playlist is initially empty
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