import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Crew() {
  return (
    <div className='crew'>
      <Outlet/>
     
       
      
       
       
          <div className="crew-links">
          <NavLink to="douglas"><div className="ball"></div></NavLink>
            <NavLink to="mark"><div className="ball"></div></NavLink>
            <NavLink to="victor"><div className="ball"></div></NavLink>
            <NavLink to="anousheh"><div className="ball"></div></NavLink>
          </div>
         
      
     
    </div>
  )
}
