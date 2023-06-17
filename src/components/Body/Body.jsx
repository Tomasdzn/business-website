import React from 'react'
import InfoCard from '../InfoCard/InfoCard'

import './Body.css'

const Body = () => {
  return (
    <div className='body-container'>
      <div className='title-container'>
        <p className='pretitle'>WHAT WE BELIEVE IN</p>
        <h1 className='title'>Grow your business, establish your brand, and put your customers first.</h1>
      </div>
      <div className='divider'>
      </div>
      <InfoCard 
        preTitleText='ABOUT' 
        titleText='Who we are' 
        descText='Nulla vel sodales tellus, quis condimentum enim. 
        Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. 
        Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.' 
        isMirror={true} />
      <InfoCard 
        preTitleText='TEAM' 
        titleText='Who we do' 
        descText='Nulla vel sodales tellus, quis condimentum enim. 
        Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. 
        Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.' 
        isMirror={false} />
    </div>
  )
}

export default Body
