import HeroLayout from "./homeComponents/HeroLayout";
import CategoryPanel from "./homeComponents/categories/CategoryPanel";
import CategoryList from "./homeComponents/categories/CategoryList/CategoryList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Modal from "components/UI/modal/Modal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePlaylistCtx } from "Context/PlaylistContext";
import { useVideoContext } from "Context/ReducerContext";
import axios from "axios";
const Home = () => {
  const {playlistModal} = usePlaylistCtx();
  const {dispatch} = useVideoContext();
  const [searchParams]= useSearchParams();
  const categoryValue = searchParams.get("category")
  const [category,setCategory]=useState(categoryValue)
  
  useEffect(()=>{(
    async function (){
      try {
        const responseData = await axios.get("/api/videos");
        if(responseData.status === 200){
          dispatch({ type:"VIDEOS",payload:responseData.data.videos})
        }
      } catch (error) {
        console.log(error)
      }
    })();
  },[])
  
  
  return (
    <>
      <HeroLayout />
      <CategoryPanel category={category} setCategory={setCategory} />
      <CategoryList category={category} />
     {playlistModal.state && <Modal/> }
     <ToastContainer/>
    </>
  );
};

export default Home;
