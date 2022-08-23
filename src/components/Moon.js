import React from 'react'
import data from "./db.json"
import moon from "../assets/destination/image-moon.png"
export default function Moon() {
  return (
    <div className='main-dest-cont'>
           <div className="dest-image">
           <img src={moon} alt="2121" className='moon-image' />
        </div>
        <div className="dest-other">
            <div className='dest-name'>{data.destinations[0].name}</div>
            <div className="dest-description">{data.destinations[0].description}</div>
            <div className="distance-travel">
             <div className="distance">
             <span>AVG. DISTANCE</span>
             <span>{data.destinations[0].distance}</span>

             </div>
             <div className="travel">
              <span>EST TRAVEL TIME</span>
              <span>{data.destinations[0].travel}</span>
             </div>
            </div>
        </div>
      
    </div>
  )
}
