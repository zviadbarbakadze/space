import React from 'react'
import data from "./db.json"
import victor from '../assets/crew/image-victor-glover.png'
export default function Victor() {
  return (
    <div className='douglas'>
    <div className="douglas-info">
    <div className="crew-header">02 MEET YOUR CREW</div>
     <h4 className='crew-role'>{data.crew[2].role}</h4>
     <h2 className='crew-name'>{data.crew[2].name}</h2>
     <p className='bio'>{data.crew[2].bio}</p>
    </div>
    <div className="doug-imig">
     <img src={victor} alt="" className='crew-image' />
    </div>
 </div>
  )
}
