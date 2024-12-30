import React from 'react'
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
