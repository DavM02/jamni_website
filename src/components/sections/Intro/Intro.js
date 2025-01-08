import React from 'react'
import './intro.css'
import catalog from '../../../data/catalog'
export default function Intro({path}) {

    
  return (
      <section id={catalog[path].id} className='intro center-gr'
          style={{ background: `url(${catalog[path].bg}) no-repeat`, '--posY': catalog[path].posY }}
      >
              <div className='mask-layer'></div>
              <div className='container text-center'>
              <h2 className='text-light'>{catalog[path].headline}</h2>
              {catalog[path].description && <p className='text-light small-text text-main up-case'
                  dangerouslySetInnerHTML={{ __html: catalog[path].description }}
                  ></p>
                  } 
              </div>
   
      </section>
  )
}
