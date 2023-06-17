import React from 'react'
import Button from '../Button/Button'

import './InfoCard.css'

const InfoCard = ({ preTitleText, titleText, descText, isMirror }) => {
  return (
    <>

      {isMirror ? 
        <>
          <div className='infocard-container'>
            <div className='text-container'>
              <p className='pretitle'>{preTitleText}</p>
              <h1>{titleText}</h1>
              <p className='description'>{descText}</p>
              <Button isContact={true} text='LEARN MORE'/>
            </div>
            <div className='image-container'>
            </div>
          </div>
        </>
        
        :
      
        <>
          <div className='infocard-container'>
            <div className='image-container-mirror'>
            </div>
            <div className='text-container-mirror'>
              <p className='pretitle'>{preTitleText}</p>
              <h1>{titleText}</h1>
              <p className='description'>{descText}</p>
              <Button isContact={true} text='LEARN MORE'/>
            </div>
          </div>
        </>
      }

    </>
    
  )
}

export default InfoCard
