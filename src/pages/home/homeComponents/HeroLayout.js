import React from 'react'
import './heroLayout.css'
import avatarOne from './../../../assets/img/avatarOne.png'
import CategoryPanel from './categories/CategoryPanel'
const HeroLayout = () => {
  return (
    <div>
    <div className='hero-cont'>
        <div className='search-nav'>
        <input  className="search" placeholder="Search..." />
         <div className='profile-nav'>
            <i className="fa fa-bell" ></i>
            <div className='bdr-hue'>
                
                    <img className='profile-img' src={avatarOne}/>
               
            </div>
         </div>
        </div>
        <div className='hero-details'>
            <h1 className='clr-pri'>
                LOST IN SPACE
            </h1>
            <p className='clr-sec'>
            Due to unforeseeable circumstances, the Robinsons, a family of space colonists, crash-land on an unknown planet. Now, they must fight for survival and escape, 
            despite the dangers surrounding them.
            </p>
            <button>WATCH <i class="fa fa-play" aria-hidden="true"></i></button>
        </div>
    </div>
    <CategoryPanel/>
    </div>
  )
}

export default HeroLayout