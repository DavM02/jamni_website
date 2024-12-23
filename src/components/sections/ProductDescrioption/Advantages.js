import React from 'react'
import doneIcon from '../../../assets/icons/done.svg'
export default function Advantages({data}) {
  return (
    <div className='container'>
      <ul className='advantages'>
              {data && data.map((el, i) => {
                  return <li className='text-center column gap-20 center-y' key={i}>
                    <div className='icon center-gr'>
                        <img src={doneIcon} alt='done-icon'/>
                         </div>
                      <span 
                      style={{lineHeight: 'normal'}}
                      className='xsmall-text text-main text-black-secondary up-case'><b>{el.title}</b></span>
                      <p className='xsmall-text text-main text-black-secondary'>{el.text}</p>
                  </li>
              })}
      </ul>
    </div>
  )
}
