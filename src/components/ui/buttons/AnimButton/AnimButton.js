import React from 'react'
import './animButton.css'
export default function AnimButton(props) {
  return (
    <button className='anim-button text-main center-gr' {...props}>
      <div className='mask'>
        <div className='row gap-10'>
          {props.children}
        </div>
        <div className='row gap-10'>
          {props.children}
        </div>
      </div>
    </button>
  )
}
