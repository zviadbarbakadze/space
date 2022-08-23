import React from 'react'
import data from "./db.json"
import titan from "../assets/destination/image-titan.png"
export default function Titan() {
  return (
    <div className='main-dest-cont'>
    <div className="dest-image">
    <img src={titan} alt="2121" className='moon-image' />
 </div>
 <div className="dest-other">
     <div className='dest-name'>{data.destinations[3].name}</div>
     <div className="dest-description">{data.destinations[3].description}</div>
     <div className="distance-travel">
      <div className="distance">
      <span>AVG. DISTANCE</span>
      <span>{data.destinations[3].distance}</span>

      </div>
      <div className="travel">
       <span>EST TRAVEL TIME</span>
       <span>{data.destinations[3].travel}</span>
      </div>
     </div>
 </div>

</div>
  )
}
