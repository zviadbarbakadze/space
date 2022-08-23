import React from 'react'
import data from "./db.json"
import mark from '../assets/crew/image-mark-shuttleworth.png'
export default function Mark() {
  return (
    <div className='douglas'>
    <div className="douglas-info">
    <div className="crew-header">02 MEET YOUR CREW</div>
     <h4 className='crew-role'>{data.crew[1].role}</h4>
     <h2 className='crew-name'>{data.crew[1].name}</h2>
     <p className='bio'>{data.crew[1].bio}</p>
    </div>
    <div className="doug-imig">
     <img src={mark} alt="" className='crew-image' />
    </div>
 </div>
  )
}
