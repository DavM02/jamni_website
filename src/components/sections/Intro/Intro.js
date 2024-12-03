import React from 'react'
import './intro.css'
export default function Intro({bg, posY, text, ...props}) {
  return (
      <section {...props} className='intro center-gr'
          style={{ background: `url(${bg}) no-repeat`, '--posY': posY }}
      >
 
              <div className='mask-layer'></div>
              <div className='container text-center'>
                  <h2 className='text-light'>{text.headline}</h2>
                  {text.description && <p className='text-light small-text text-main up-case'
                      dangerouslySetInnerHTML={{ __html: text.description }}
                  ></p>
                  } 
              </div>
   
      </section>
  )
}
