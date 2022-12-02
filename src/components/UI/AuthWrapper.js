import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './auth.css'


const AuthWrapper = ({children}) => {
    const location = useLocation()
   const linkValue = location.pathname !== "/login"

  return (
    <div className='auth-cont'>
    <div className='auth-heading'>
      <small>WATCH FOR FREE</small>
      <h1>{linkValue? "Create new account":"Welcome Back"}</h1>
      <small>{linkValue?"Already A Member ?":"Don't have an account ?" } <NavLink to={linkValue? "/login":"/signup"}>{linkValue?" Login":" Sign Up"}</NavLink></small>
    </div>
    {children}
    </div>
  )
}

export default AuthWrapper