import { createContext, useContext, useReducer } from "react"
import { ReducerFun } from "Reducer/ReducerFun";




const ReducerContext = createContext();


const VideoProvider =({children})=>{
    const [{videos},dispatch] = useReducer(ReducerFun,
        {videos:[]})

        return (
            <ReducerContext.Provider value={{videos,dispatch}}>
                {children}
            </ReducerContext.Provider>
        )
}

const useVideoContext =()=>useContext(ReducerContext);

export {useVideoContext, VideoProvider }