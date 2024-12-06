import React from 'react'
import './contacts.css'
import Map from './Map'
import instagram from '../../../assets/icons/Instagram_black.svg'
import facebook from '../../../assets/icons/Facebook_black.svg'
import vk from '../../../assets/icons/VK_black.svg'
import mail from '../../../assets/icons/mail.svg'
import phone from '../../../assets/icons/phone.svg'
import location from '../../../assets/icons/location.svg'
export default function Contacts() {



    return (
        <section id='contacts'>

            <div className='text-center'>
                <h2>контакты</h2>
                <span className='small-text text-main text-black up-case'>Мы открыты к сотрудничеству и предложениям</span>
            </div>
            <div className='section-layout'>
                <div className='column s-between'>
                    <div>
                        <p className='text-main text-black xsmall-text up-case'>
                            Свяжитесь с нами, если у вас возникли вопросы:
                        </p>
                        <div className='column gap-20'>
                            <div className='row start-y gap-15'>
                                <img src={phone} alt='phone-icon' />
                                <div>
                                    <a href="tel:+79160257790" className='text-main text-black xxsmall-text'>+7 (916) 025-77-90</a>
                                    <br />  <a href="tel:+74951501091" className='text-main text-black xxsmall-text'>+7 (495) 150-10-91</a>
                                </div>
                            </div>
                            <div className='row start-y gap-15'>
                                <img src={location} alt='location-icon' />
                                <span className='text-main text-black xxsmall-text'>
                                    Москва, Сельскохозяйственная улица, д. 12А
                                    <br />
                                    <b>
                                        {`(обязательно предупредите нас перед приездом)`}
                                    </b>
                                </span>
                            </div>
                            <div className='row center-y gap-15'>
                                <img src={mail} alt='mail-icon' />
                                <a className='text-main text-black xxsmall-text'
                                    href="mailto:mailto:info@jamni.ru">
                                    mailto:info@jamni.ru</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-main text-black xsmall-text up-case'>
                            Наше представительство в Краснодарском крае, г. Сочи:
                        </p>
                        <div className='column gap-20'>
                            <div className='row start-y gap-15'>
                                <img src={phone} alt='phone-icon' />
                                <div>
                                    <a href="tel:+79160257790" className='text-main text-black xxsmall-text'>+7 (916) 025-77-90</a>
                                    <br />  <a href="tel:+74951501091" className='text-main text-black xxsmall-text'>+7 (495) 150-10-91</a>
                                </div>
                            </div>
                            <div className='row center-y gap-15'>
                                <img src={mail} alt='mail-icon' />
                                <a className='text-main text-black xxsmall-text'
                                    href="mailto:mailto:info@jamni.ru">
                                    mailto:info@jamni.ru</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column center-x gap-30'>
                    <a href='#'>
                        <img width={40} height={40} src={instagram} alt='instagram' />
                    </a>
                    <a href='#'>
                        <img width={40} height={40} src={facebook} alt='facebook' />
                    </a>
                    <a href='#'>
                        <img width={40} height={40} src={vk} alt='vk' />
                    </a>
                </div>

                <div>
                    <Map />
                </div>
            </div>

        </section>
    )
}
