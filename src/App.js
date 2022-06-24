import Home from "./pages/home/Home";
import {Route, Routes} from 'react-router-dom';
import HomeWrapper from "./components/UI/HomeWrapper";
import Like from "pages/liked/Like";
import WatchLater from "pages/watchLater/WatchLater";
import History from "pages/History/History";
import Playlist from "pages/playlist/Playlist";

function App() {
  return (
  <>
  <HomeWrapper>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/liked" element={<Like/>}/>
    <Route path="/watchlater" element={<WatchLater/>}/>
    <Route path="/history" element={<History/>}/>
    <Route path="playlist" element={<Playlist/>}/>
   </Routes>
   </HomeWrapper>
  </>
  )
}

export default App;
