import React from 'react'
import './animButton.css'
export default function AnimButton(props) {
  return (
    <button className='anim-button text-main center-gr' {...props}>
      <div className='mask'>
        {props.children}
        {props.children}
      </div>
    </button>
  )
}
