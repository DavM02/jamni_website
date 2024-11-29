import React from 'react'
import './intro.css'
export default function Intro({bg, posY, text, ...props}) {
  return (
      <section {...props} className='intro'
          style={{ background: `url(${bg}) no-repeat`, backgroundPositionY: posY }}
      >
          <div className='center-gr text-center'>
              <div className='mask-layer'></div>
              <div className='container'>
                  <h2 className='text-light'>{text.headline}</h2>
                  <p className='text-light small-text text-main up-case'
                      dangerouslySetInnerHTML={{ __html: text.description }}
                  >
                       
                  </p>
              </div>
          </div>
      </section>
  )
}
