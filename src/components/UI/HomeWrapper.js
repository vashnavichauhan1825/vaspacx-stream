import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './home.css'
const HomeWrapper = ({children}) => {
  return (
    <div className='home'>
        <Sidebar/>
        {children}
    </div>
  )
}

export default HomeWrapper