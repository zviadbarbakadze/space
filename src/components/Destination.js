import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
import data from './db.json'

export default function Destination() {
  return (
    <>
    <div className='destination'>
      <div className="header-links">
      <div className="header">
        <h4 className='detination-header'>01 PICK YOUR DESTINATION</h4>
    
      </div>
      <div className="destination-links">
     <NavLink to="moon">{data.destinations[0].name}</NavLink> 
     <NavLink to ='mars'>{data.destinations[1].name}</NavLink> 
     <NavLink to="europa">{data.destinations[2].name}</NavLink> 
     <NavLink to='titan'>{data.destinations[3].name}</NavLink> 
    
     </div>
     </div>
     <Outlet/>
    </div>
    
    </>
  )
}
