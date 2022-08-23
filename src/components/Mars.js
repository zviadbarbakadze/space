import React from 'react'
import data from "./db.json"
import mars from "../assets/destination/image-mars.png"
export default function Mars() {
  return (
    <div className='main-dest-cont'>
           <div className="dest-image">
           <img src={mars} alt="2121" className='moon-image' />
        </div>
        <div className="dest-other">
            <div className='dest-name'>{data.destinations[1].name}</div>
            <div className="dest-description">{data.destinations[1].description}</div>
            <div className="distance-travel">
             <div className="distance">
             <span>AVG. DISTANCE</span>
             <span>{data.destinations[1].distance}</span>

             </div>
             <div className="travel">
              <span>EST TRAVEL TIME</span>
              <span>{data.destinations[1].travel}</span>
             </div>
            </div>
        </div>
      
    </div>
  )
}
