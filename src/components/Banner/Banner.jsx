import React from 'react'
import Button from '../Button/Button'

import './Banner.css'

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner'>
        <div className='banner-content'>
          <span>
            Grow your business.
          </span>
          <p className='banner-desc'>Give your business a boost with a beautifully crafted homepage.</p>
          <Button isContact={false} text='LEARN MORE'/>
        </div>
      </div>
    </div>
  )
}

export default Banner
