import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Slide({ el }) {
  return (
    <Link to={`catalog/${el.catalog}/${el.name.toLowerCase()}?id=${el.id}`}>

      <div className='rec-item-image'>
        <LazyLoadImage
          width={'100%'}
          height={'100%'}
          effect='blur'
          src={el.images[0]} alt={el.name} />
 
      </div>
    </Link>
  )
}