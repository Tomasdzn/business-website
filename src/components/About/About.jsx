import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'

import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-text-container'>
        <p>ABOUT US</p>
        <h1>Company news</h1>
      </div>
      <div className='article-container'>
        <ArticleCard 
          titleText='10 Quick Tips About Blogging'
          dateText='FEB 21, 2019'
          descText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
          Nunc ut sem vitae risus tristique posuere.' />
        <ArticleCard 
          titleText='15 Best Blogs To Follow About Web Design'
          dateText='FEB 21, 2019'
          descText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
          Nunc ut sem vitae risus tristique posuere.' />
        <ArticleCard 
          titleText='7 of the Best Examples of Beautiful Blog Design'
          dateText='FEB 21, 2019'
          descText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
          Nunc ut sem vitae risus tristique posuere.' />
      </div>
    </div>
  )
}

export default About
