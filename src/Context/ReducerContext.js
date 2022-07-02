import { createContext, useContext, useReducer } from "react"
import { ReducerFun } from "Reducer/ReducerFun";




const ReducerContext = createContext();


const VideoProvider =({children})=>{
    const [{videos,history},dispatch] = useReducer(ReducerFun,
        {videos:[],
        history:[]})

        return (
            <ReducerContext.Provider value={{videos,history,dispatch}}>
                {children}
            </ReducerContext.Provider>
        )
}

const useVideoContext =()=>useContext(ReducerContext);

export {useVideoContext, VideoProvider }