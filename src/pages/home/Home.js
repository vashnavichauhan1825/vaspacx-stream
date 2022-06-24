import HeroLayout from "./homeComponents/HeroLayout";
import CategoryPanel from "./homeComponents/categories/CategoryPanel";
import CategoryList from "./homeComponents/categories/CategoryList/CategoryList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams]= useSearchParams();
  const categoryValue = searchParams.get("category")
  const [category,setCategory]=useState(categoryValue)
  return (
    <div className="home-section">
      <HeroLayout />
      <CategoryPanel category={category} setCategory={setCategory} />
      <CategoryList category={category} />
    </div>
  );
};

export default Home;
