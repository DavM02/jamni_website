import React from 'react'
import './projects.css'
import Slider from './Slider'
import Sketch from './Sketch'
import Contact from './Contact'
export default function Projects() {
  return (
    <section id='projects'>
      <div className='container'>
              <div className='text-center'>
                  <h2>Наши проекты</h2>
                  <span className='small-text text-main text-black up-case'>с душой реализованные идеи</span>
              </div>
             <Slider/>
      </div>
      <div className='background'>
        <div className='play'></div>
      </div>
      <Sketch/>
      <Contact/>
      </section>
  )
}
