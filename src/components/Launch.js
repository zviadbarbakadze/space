import React from 'react'
import data from './db.json'
import launch from '../assets/technology/image-launch-vehicle-portrait.jpg'

export default function Launch() {
  return (
    <div className="tech-cont">
      <div className="tech-info">
      <span>{data.technology[0].name}</span>
      <p className='tech-descr'>{data.technology[0].description}</p>
      </div>
      <div className="tech-image">
      <img src={launch} alt="" className='tech-images'/>
      </div>
    </div>
  )
}
