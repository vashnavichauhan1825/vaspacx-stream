import Vaspacx from 'components/UI/logo/Vaspacx'
import { Link } from 'react-router-dom'
import { useAuthCtx } from 'Context/AuthContext'
import avatarOne from './../../assets/img/avatarOne.png'
import './navbar.css'
const Navbar = () => {
  const {isLoggedIn,logout} = useAuthCtx();
  return (
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
  )
}

export default Navbar


