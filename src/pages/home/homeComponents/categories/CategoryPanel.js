import './category.css'

const CategoryPanel = ({category,setCategory}) => {
  return (
    <div className='category-panel'>
    <span className={`${category === null && "active" }`}
    onClick={()=>setCategory(null)}>
        All
    </span>
    <span className={`${category === "Sci-Fi" && "active" }`}
    onClick={()=>setCategory('Sci-Fi')}>
        Sci-Fi
    </span>
    <span className={`${category === "Info" && "active" }`}
    onClick={()=>setCategory("Info")}>
        Info
    </span>
    <span className={`${category === "Space" && "active" }`}
    onClick={()=>setCategory("Space")}>
        Space
    </span>
    <span className={`${category === "Series" && "active" }`}
    onClick={()=>setCategory("Series")}>
        Series
    </span>
    <span className={`${category === "Kid's TV" && "active" }`}
    onClick={()=>setCategory("Kid's TV")}>
        Kid's TV
    </span>
    </div>
  )
}

export default CategoryPanel