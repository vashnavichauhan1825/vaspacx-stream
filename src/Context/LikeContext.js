import axios from "axios"
import { ErrorToast } from "components/UI/Toast/ErrorToast";
import { SuccessToast } from "components/UI/Toast/SuccessToast";
import { createContext, useContext } from "react"
import { useVideoContext } from "./ReducerContext";


const  LikeContext = createContext();

const LikeProvider =({children})=>{
    const encodedToken = localStorage.getItem("token");
    const {dispatch}= useVideoContext();

    const addLikeHandler=async(video)=>{
        try {
            const response = await axios.post("/api/user/likes",{video},
            {headers:{authorization:encodedToken}})
            if(response.status === 201){
                SuccessToast("Video Liked !")
                dispatch({type:"LIKE",payload:response.data.likes});
            }
        } catch (error) {
            console.log(error)
        }
    }

const removeLikeHandler = async (id) => {
    console.log(id)
    try {
      const response = await axios.delete(`/api/user/likes/${id}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
       ErrorToast("Video Unliked !")
        dispatch({ type: "LIKE", payload: response.data.likes });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LikeContext.Provider value={{ addLikeHandler,removeLikeHandler }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLikeCtx=()=>useContext(LikeContext);

export{useLikeCtx,LikeProvider}