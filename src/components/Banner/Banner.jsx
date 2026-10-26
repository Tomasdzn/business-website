import React from 'react'
import Button from '../Button/Button'

import './Banner.css'

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner'>
        <div className='blob blob-a' />
        <div className='blob blob-b' />
        <div className='blob blob-c' />
        <div className='banner-content'>
          <p className='eyebrow'>Brand studio</p>
          <h1>Grow your business.</h1>
          <p className='banner-desc'>Give your business a boost with a homepage that feels bold, clear, and impossible to scroll past.</p>
          <div className='banner-actions'>
            <Button isContact={false} text='LEARN MORE'/>
            <Button isContact={true} text='START NOW'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
