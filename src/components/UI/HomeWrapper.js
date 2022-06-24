import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './home.css'
const HomeWrapper = ({children}) => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='main-layout'>
        {children}
        </div>
      
    </div>
  )
}

export default HomeWrapper