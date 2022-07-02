import { createContext, useContext, useReducer } from "react";
import { ReducerFun } from "Reducer/ReducerFun";

const ReducerContext = createContext();

const VideoProvider = ({ children }) => {
  const [{ videos, like, history }, dispatch] = useReducer(ReducerFun, {
    videos: [],
    history: [],
    like: [],
  });

  return (
    <ReducerContext.Provider value={{ videos,like, history, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

const useVideoContext = () => useContext(ReducerContext);

export { useVideoContext, VideoProvider };
