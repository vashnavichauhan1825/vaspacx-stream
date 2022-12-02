import { usePlaylistCtx } from "Context/PlaylistContext";
import { useState } from "react";
import "./modal.css";
import { ToastContainer } from 'react-toastify';
const Modal = () => {
  const {
    setPlaylistModal,
    playlist,
    playlistModal,
    addVideoToPlaylist,
    addVideoHandler,
    removeVideoHandler,
  } = usePlaylistCtx();
  const [inputField, setInputField] = useState(false);
  const [playlistInfo, setPlaylistInfo] = useState({
    title: "",
    description: "",
  });
  return (
    <div className="modal-bg">
      <div className="modal-wrapper">
        <div className="add-cont">
          <p>Save To...</p>
          <i
            onClick={() => setPlaylistModal({ state: false, video: {} })}

            class="fa fa-times"
            aria-hidden="true"
          ></i>
        </div>
       {playlist.length !==0 && <ul className="modal-list">  
       
          {playlist.map((playlist) => {
           
            return (
              <li key={playlist._id}>
                <label>
                  <input
                    checked={
                      playlist.videos.findIndex(
                        (v) => v._id === playlistModal.video._id
                      ) !== -1
                    }
                    
                    onChange={(e)=>{
                      if(playlist.videos.findIndex((v)=>v._id === playlistModal.video._id) !== -1){
                        removeVideoHandler(e.target.value);
                      }else{
                        addVideoHandler(e.target.value)
                      }
                    }
                    }
                    value={playlist._id}
                    type="checkbox"
                  />
                 {playlist.title}
                </label>
              </li>
            );
          })}

          {/* <li>
            <label>
              <input type="checkbox" /> Watch Later
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Watch Later
            </label>
          </li> */}
        </ul>}
        <div
          className="create-cont"
          onClick={() => {
            setInputField(true);
          }}
        >
          <span>
            <i class="fa fa-plus" aria-hidden="true"></i> Create New Playlist
          </span>
        </div>
        {inputField && (
          <>
            <div className="add-list-cont">
              <label>
                title: <input onChange={(e) =>
              setPlaylistInfo({ ...playlistInfo, title: e.target.value })
            }
            value={playlistInfo.title}
            maxLength="15"
            type="text"
            placeholder="Title Playlist..." />
              </label>
              <label>
                desc: <input   onChange={(e) =>
              setPlaylistInfo({
                ...playlistInfo,
                description: e.target.value,
              })
            }
            value={playlistInfo.description}
            maxLength="15"
            type="text"
            placeholder="Write Desc here!" />
              </label>
            </div>
            <div className="btn-box">
              <button onClick={() => {
              addVideoToPlaylist(playlistInfo);
              setPlaylistInfo({ title: "", description: "" });
            }} className="create-btn">CREATE</button>
            </div>
          </>
        )}
      </div>
      <ToastContainer/>
    </div>
    
  );
};

export default Modal;
