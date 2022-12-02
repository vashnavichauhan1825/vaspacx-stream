import axios from "axios";
import { ErrorToast } from "components/UI/Toast/ErrorToast";
import { SuccessToast } from "components/UI/Toast/SuccessToast";
import { createContext, useContext } from "react";
import { useVideoContext } from "./ReducerContext";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const { dispatch } = useVideoContext();

  const addWatchLaterHandler = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        SuccessToast("Added To Watch Later !");
        dispatch({ type: "WATCHLATER", payload: response.data.watchlater });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWatchLater = async (id) => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        ErrorToast("Removed From Watch Later !");
        dispatch({ type: "WATCHLATER", payload: response.data.watchlater });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <WatchLaterContext.Provider
      value={{ addWatchLaterHandler, removeFromWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLaterCtx = () => useContext(WatchLaterContext);

export { useWatchLaterCtx, WatchLaterProvider };
