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
    <span className={`${category === "Documentry" && "active" }`}
    onClick={()=>setCategory("Documentry")}>
        Documentry
    </span>
    <span className={`${category === "Facts" && "active" }`}
    onClick={()=>setCategory("Facts")}>
        Facts
    </span>
    <span className={`${category === "Experiments" && "active" }`}
    onClick={()=>setCategory("Experiments")}>
        Experiments
    </span>
    <span className={`${category === "Kid's TV" && "active" }`}
    onClick={()=>setCategory("Kid's TV")}>
        Kid's TV
    </span>
    </div>
  )
}

export default CategoryPanel