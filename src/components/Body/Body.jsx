import React from 'react'
import InfoCard from '../InfoCard/InfoCard'

import './Body.css'

const Body = () => {
  return (
    <div className='body-container' id='about'>
      <div className='title-container'>
        <p className='pretitle'>WHAT WE BELIEVE IN</p>
        <h1 className='title'>Grow your business, <span>establish your brand</span>, and put your customers first.</h1>
      </div>
      <div className='stats'>
        <div className='stat'>
          <strong>120+</strong>
          <span>brands launched</span>
        </div>
        <div className='stat'>
          <strong>48</strong>
          <span>markets reached</span>
        </div>
        <div className='stat'>
          <strong>4.9</strong>
          <span>client rating</span>
        </div>
      </div>
      <div id='work'>
        <InfoCard
          preTitleText='ABOUT'
          titleText='Who we are'
          descText='Nulla vel sodales tellus, quis condimentum enim.
          Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat.
          Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.'
          isMirror={true} />
      </div>
      <div id='team'>
        <InfoCard
          preTitleText='TEAM'
          titleText='What we do'
          descText='Nulla vel sodales tellus, quis condimentum enim.
          Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat.
          Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.'
          isMirror={false} />
      </div>
    </div>
  )
}

export default Body
