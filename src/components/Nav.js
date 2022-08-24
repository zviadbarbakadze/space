import React, { useContext } from 'react'
import logo from "../assets/shared/logo.svg"
import{NavLink} from "react-router-dom"
import burger from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"
import { myContext } from '../App'
export default function Nav() {
  const{showNavbar,navRef}=useContext(myContext)
  return (
    <div className='navigation' >
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        <div className="menu" ref={navRef}>
          <NavLink to="space">00 HOME</NavLink>
          <NavLink to="/destination">01 DESTINATION</NavLink>
          <NavLink to="/crew">02 CREW</NavLink>
          <NavLink to="/technology">03 TECHNOLOGY</NavLink>
          <img src={close} alt="" onClick={showNavbar} className='close' />
        </div>
        <div className="burger" >
           <img src={burger} alt="" className='burger' onClick={showNavbar}/>
        </div>
    </div>
  )
}
