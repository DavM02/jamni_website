import React from 'react'
import './subscribe.css'
import mochup from '../../../assets/Mockup.png';
import AnimatedText from '../../scroll/TextAnimation';
import Input from '../../ui/Input/Input';
import AnimButton from '../../ui/AnimButton/AnimButton';
import mailIcon from '../../../assets/icons/mail.svg'
export default function Subscribe() {
    return (
        <section id='subscribe'>
            <div className='container'>

                <div className='text-wrapper'>
                    <AnimatedText text={'подпишитесь на нашу рассылку'} as={'h5'} canter={false} />
                    <p className='small-text text-main text-black up-case'>
                        получайте <b>скидки</b> и супер предложения
                    </p>
                    <form action='#'>
                        <div className='row wrap gap-15'>
                            <Input type='email' placeholder='Введите свой адрес электронной почты' />
                            <AnimButton type='submit'>
                       
                                    <img src={mailIcon} alt='mail' /> ПОДПИСАТЬСЯ
                         
                            </AnimButton>
                        </div>
                    </form>
                </div>

                <div className='mockup'>
                    <img src={mochup} alt='mobile-app' />
                </div>


            </div>
        </section>
    )
}
