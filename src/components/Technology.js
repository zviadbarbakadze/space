import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Technology() {
  return (
    <div className='tech'>
      
      <div className="tech-links">
      <NavLink to='launch'><div className="ball-1">1</div></NavLink>
      <NavLink to='spaceport'><div className="ball-1">2</div></NavLink>
      <NavLink to='capsule'><div className="ball-1">3</div></NavLink>
      </div>
      <Outlet/>
    </div>
  )
}
