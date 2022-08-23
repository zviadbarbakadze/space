import React from 'react'
import data from "./db.json"
import europa from "../assets/destination/image-europa.png"
export default function Europa() {
  return (
    <div className='main-dest-cont'>
    <div className="dest-image">
    <img src={europa} alt="2121" className='moon-image' />
 </div>
 <div className="dest-other">
     <div className='dest-name'>{data.destinations[2].name}</div>
     <div className="dest-description">{data.destinations[2].description}</div>
     <div className="distance-travel">
      <div className="distance">
      <span>AVG. DISTANCE</span>
      <span>{data.destinations[2].distance}</span>

      </div>
      <div className="travel">
       <span>EST TRAVEL TIME</span>
       <span>{data.destinations[2].travel}</span>
      </div>
     </div>
 </div>

</div>
  )
}
