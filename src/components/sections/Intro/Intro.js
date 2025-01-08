import React from 'react'
import './intro.css'
export default function Intro({ id, bg, posY, description, headline}) {

    
  return (
      <section id={id} className='intro center-gr'
          style={{ background: `url(${bg}) no-repeat`, '--posY': posY }}
      >
              <div className='mask-layer'></div>
              <div className='container text-center'>
              <h2 className='text-light'>{headline}</h2>
              {description && <p className='text-light small-text text-main up-case'
                  dangerouslySetInnerHTML={{ __html: description }}
                  ></p>
                  } 
              </div>
   
      </section>
  )
}
