import React from 'react'
import './heroLayout.css'
import avatarOne from './../../../assets/img/avatarOne.png'
import heroHeading from './../../../assets/img/heroHeading.png'
import { Link } from 'react-router-dom'
import PrimaryButton from 'components/UI/button/PrimaryButton'
import { useAuthCtx } from 'Context/AuthContext'
import Vaspacx from 'components/UI/logo/Vaspacx'
const HeroLayout = () => {
 const {isLoggedIn,logout} = useAuthCtx();
  return (
    
    <div className='hero-cont'>
        <div className='search-nav'>
        <Vaspacx/>
        <input  className="search" placeholder="Search..." />
         <div className='profile-nav'>
            <i className="fa fa-bell" ></i>
            <Link to={isLoggedIn?"/":"/login"}>
            <div className='bdr-hue' >
                
                    <img className='profile-img' src={avatarOne}/>
                  
            </div></Link>
            {isLoggedIn && <i onClick={logout} on className="fa fa-sign-out" aria-hidden="true"></i>}
         </div>
        </div>
        <div className='hero-details'>
            <img src={heroHeading}/>
            <p className='clr-sec'>
            Due to unforeseeable circumstances, the Robinsons, a family of space colonists, crash-land on an unknown planet. Now, they must fight for survival and escape, 
            despite the dangers surrounding them.
            </p>
            <PrimaryButton>WATCH <i class="fa fa-play" aria-hidden="true"></i></PrimaryButton>
        </div>
    </div>
  
  )
}

export default HeroLayout