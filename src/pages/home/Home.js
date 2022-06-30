import HeroLayout from "./homeComponents/HeroLayout";
import CategoryPanel from "./homeComponents/categories/CategoryPanel";
import CategoryList from "./homeComponents/categories/CategoryList/CategoryList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Modal from "components/UI/modal/Modal";
import { usePlaylistCtx } from "Context/PlaylistContext";
const Home = () => {
  const {playlistModal} = usePlaylistCtx();
  const [searchParams]= useSearchParams();
  const categoryValue = searchParams.get("category")
  const [category,setCategory]=useState(categoryValue)
  return (
    <>
      <HeroLayout />
      <CategoryPanel category={category} setCategory={setCategory} />
      <CategoryList category={category} />
     {playlistModal.state && <Modal/> }
    </>
  );
};

export default Home;
