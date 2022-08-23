import React from 'react'
import data from "./db.json"
import anu from '../assets/crew/image-anousheh-ansari.png'
export default function Anousheh() {
  return (
    <div className='douglas'>
    <div className="douglas-info">
    <div className="crew-header">02 MEET YOUR CREW</div>
     <h4 className='crew-role'>{data.crew[3].role}</h4>
     <h2 className='crew-name'>{data.crew[3].name}</h2>
     <p className='bio'>{data.crew[3].bio}</p>
    </div>
    <div className="doug-imig">
     <img src={anu} alt="" className='crew-image' />
    </div>
 </div>
  )
}
