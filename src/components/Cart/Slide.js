import React from 'react'
import { Link } from 'react-router-dom'

export default function Slide({ el, adjustTransition, transformIndex }) {
  return (
    <li className='slider-item'
          style={{
              left: `calc((100px + 20px) * ${transformIndex})`,
              transition: adjustTransition ? 'var(--transition) left 0.7s' : 'unset'
          }}
    >
          <Link to={`catalog/${el.catalog}/${el.name.toLowerCase()}?id=${el.id}`}>
          
         <div className='rec-item-image'>
            <img src={el.images[0]} alt={el.name} />
         </div>
         </Link>
      </li>
  )
}
