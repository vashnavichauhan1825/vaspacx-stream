import { createContext, useContext, useReducer } from "react";
import { ReducerFun } from "Reducer/ReducerFun";

const ReducerContext = createContext();

const VideoProvider = ({ children }) => {
  const [{ videos, like,watchLater, history }, dispatch] = useReducer(ReducerFun, {
    videos: [],
    history: [],
    like: [],
    watchLater:[],
  });

  return (
    <ReducerContext.Provider value={{ videos,like,watchLater, history, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

const useVideoContext = () => useContext(ReducerContext);

export { useVideoContext, VideoProvider };
