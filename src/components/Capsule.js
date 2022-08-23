import React from 'react'
import data from './db.json'
import space from '../assets/technology/image-space-capsule-portrait.jpg'
export default function Capsule() {
  return (
    <div className="tech-cont">
    <div className="tech-info">
    <span>{data.technology[1].name}</span>
    <p className='tech-descr'>{data.technology[1].description}</p>
    </div>
    <div className="tech-image">
    <img src={space} alt="" className="tech-images"/>
    </div>
  </div>
  )
}
