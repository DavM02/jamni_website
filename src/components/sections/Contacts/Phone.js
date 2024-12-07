import React from 'react'
import phone from '../../../assets/icons/phone.svg'

export default function Phone() {
  return (
      <div className='row start-y gap-15'>
          <img src={phone} alt='phone-icon' />
          <div>
              <a href="tel:+79160257790" className='text-main text-black xxsmall-text'>+7 (916) 025-77-90</a>
              <br />  <a href="tel:+74951501091" className='text-main text-black xxsmall-text'>+7 (495) 150-10-91</a>
          </div>
      </div>
  )
}
