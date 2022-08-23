import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
      <div className="text-cont">
        <div className="first-text">
          <p>So, you want to travel to</p>
        </div>
        <div className="second-text">
        <p>space</p>
        </div>
        <div className="third-text">
          <p>  Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
        </div>
      </div>
      <Link to="/destination">
      <div className="explore">
      EXPLORE
     </div>
      </Link>
     
    </div>
  )
}
