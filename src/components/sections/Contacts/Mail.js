import React from 'react'
import mail from '../../../assets/icons/mail.svg'

export default function Mail() {
  return (
      <div className='row center-y gap-15'>
          <img src={mail} alt='mail-icon' />
          <a className='text-main text-black xxsmall-text'
              href="mailto:mailto:info@jamni.ru">
              mailto:info@jamni.ru</a>
      </div>
  )
}
