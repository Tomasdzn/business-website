import React from 'react'

import './ArticleCard.css'

const ArticleCard = ({ titleText, dateText, descText }) => {
  return (
    <div className='card-container'>
      <h2>{titleText}</h2>
      <p className='date'>{dateText}</p>
      <p className='desc'>{descText}</p>
    </div>
  )
}

export default ArticleCard
