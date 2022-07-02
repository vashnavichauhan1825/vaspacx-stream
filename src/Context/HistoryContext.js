import axios from "axios";
import { createContext, useContext } from "react";
import { useVideoContext } from "./ReducerContext";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const { dispatch, history } = useVideoContext();

  const addHistoryHandler = async (video) => {
    if (history.some((videoItem) => videoItem._id === video._id)) {
      dispatch({ type: "HISTORY", payload: history });
    } else {
      try {
        const res = await axios.post(
          "/api/user/history",
          {
            video,
          },
          { headers: { authorization: encodedToken } }
        );
        if (res.status === 201) {
          dispatch({ type: "HISTORY", payload: res.data.history });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeFromHistory = async (id) => {
    try {
      const response = await axios.delete(`/api/user/history/${id}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        dispatch({ type: "HISTORY", payload: response.data.history });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeHistoryHandler = async () => {
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        dispatch({ type: "HISTORY", payload: response.data.history });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const historyCtxValue={
    addHistoryHandler,removeFromHistory,removeHistoryHandler
  }
return(
  <HistoryContext.Provider value={historyCtxValue}>{children}</HistoryContext.Provider>
)};

const useHistoryCtx = () => useContext(HistoryContext);

export { HistoryProvider, useHistoryCtx };
