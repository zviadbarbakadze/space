import React from 'react'
import data from "./db.json"
import doug from '../assets/crew/image-douglas-hurley.png'
export default function Douglas() {
  return (
    <div className='douglas'>
       <div className="douglas-info">
       <div className="crew-header">02 MEET YOUR CREW</div>
        <h4 className='crew-role'>{data.crew[0].role}</h4>
        <h2 className='crew-name'>{data.crew[0].name}</h2>
        <p className='bio'>{data.crew[0].bio}</p>
       </div>
       <div className="doug-imig">
        <img src={doug} alt="" className='crew-image' />
       </div>
    </div>
  )
}
