import Home from "./pages/home/Home";
import {Route, Routes} from 'react-router-dom';
import HomeWrapper from "./components/UI/HomeWrapper";
import Like from "pages/liked/Like";
import WatchLater from "pages/watchLater/WatchLater";
import History from "pages/History/History";
import Playlist from "pages/playlist/Playlist";
import Signup from "components/Auth/Signup";
import Login from "components/Auth/Login";

function App() {
  return (
  <>
  {<HomeWrapper>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/liked" element={<Like/>}/>
    <Route path="/watchlater" element={<WatchLater/>}/>
    <Route path="/history" element={<History/>}/>
    <Route path="playlist" element={<Playlist/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
   </Routes>
   </HomeWrapper>}
  </>
  )
}

export default App;
