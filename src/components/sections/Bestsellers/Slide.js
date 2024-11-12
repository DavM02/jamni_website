import React from 'react'

export default function Slide({  el, adjustTransition, transformIndex }) {
  return (
      <div
          className='slider-item'
          style={{
              left: `calc((var(--bestsellers-slider-img-width) + 20px) * ${transformIndex})`,
              transition: adjustTransition ? 'var(--transition) left 0.7s' : 'unset'
          }}
      >
          <div className='slider-image'>
              <img src={el.image} alt={`slider-image-${el.id + 1}`} />
          </div>
          <span className='small-text text-main text-black up-case'>{el.name}</span>
      </div>
  )
}
