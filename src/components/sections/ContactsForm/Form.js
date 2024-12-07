import React from 'react'
import Input from '../../ui/inputs/Input/Input'
import AnimButton from '../../ui/buttons/AnimButton/AnimButton'
import mailIcon from '../../../assets/icons/mail.svg'

export default function Form() {
  return (
      <form action='#'>
          <div className='row gap-15'>
              <div className='column gap-10'>
                  <Input type='name' placeholder='имя' />
                  <Input type='phone' placeholder='телефон' />
                  <Input type='email' placeholder='почта' />
              </div>
              <div className='column gap-10'>
                  <Input type='text' placeholder='Ссылка на сайт / соц. сети' />
                  <Input tag={'textarea'} placeholder='Сообщение' />
              </div>
          </div>
          <AnimButton type='submit'>

              <img src={mailIcon} alt='mail' /> отправить

          </AnimButton>
      </form>
  )
}
