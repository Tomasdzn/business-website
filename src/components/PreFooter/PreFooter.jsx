import React from 'react'
import Button from '../Button/Button'

import './PreFooter.css'

const PreFooter = () => {
  return (
    <div className='prefooter-container'>
      <div className='prefooter-text-container'>
        <h1>Grow your business.</h1>
        <p>Today is the day to build the business of your dreams. 
          Share your mission with the world — and blow your customers away.</p>
        <Button isContact={true} text='START NOW' />
      </div>
    </div>
  )
}

export default PreFooter
