import React from 'react'

import './Button.css'

const Button = ({ text, isContact }) => {
  return (
    <div className={isContact ? 'contact-container' : 'learn-container'} isContact={false}>
      <button className={isContact ? 'contact-button' : 'learn-button'}>{text}</button>
    </div>
  )
}

export default Button
