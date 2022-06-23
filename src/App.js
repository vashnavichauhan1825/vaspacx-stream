import Home from "./pages/home/Home";
import {Route, Routes} from 'react-router-dom';
import HomeWrapper from "./components/UI/HomeWrapper";

function App() {
  return (
  <>
  <HomeWrapper>
  <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </HomeWrapper>
  </>
  )
}

export default App;
