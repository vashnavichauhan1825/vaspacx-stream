import axios from "axios"
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
                dispatch({type:"LIKE",payload:response.data.likes});
            }
        } catch (error) {
            console.log(error)
        }
    }

const removeLikeHandler = async (id) => {
    try {
      const response = await axios.delete(`/api/user/likes/${id}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
       
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