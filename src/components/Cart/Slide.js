import React from 'react'
import { Link } from 'react-router-dom'

export default function Slide({ el }) {
  return (
    <Link to={`catalog/${el.catalog}/${el.name.toLowerCase()}?id=${el.id}`}>

      <div className='rec-item-image'>
        <img src={el.images[0]} alt={el.name} />
      </div>
    </Link>
  )
}
