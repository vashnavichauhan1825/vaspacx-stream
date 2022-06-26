import React from 'react'
import { NavLink } from 'react-router-dom'
import './auth.css'

const AuthWrapper = ({children}) => {
  return (
    <div className='auth-cont'>
    <div className='auth-heading'>
      <small>WATCH FOR FREE</small>
      <h1>Create new account</h1>
      <small>Already A Member ? <NavLink to="/">Log In</NavLink></small>
    </div>
    {children}
    </div>
  )
}

export default AuthWrapper