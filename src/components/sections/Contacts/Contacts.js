import React from 'react'
import './contacts.css'
import Map from './Map'
import location from '../../../assets/icons/location.svg'
import Socials from './Socials'
import Mail from './Mail'
import Phone from './Phone'
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
                           <Phone/>
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
                            <Mail />
                        </div>
                    </div>
                    <div>
                        <p className='text-main text-black xsmall-text up-case'>
                            Наше представительство в Краснодарском крае, г. Сочи:
                        </p>
                        <div className='column gap-20'>
                            <Phone/>
                            <Mail />
                        </div>
                    </div>
                </div>
                <Socials />
                <div>
                    <Map />
                </div>
            </div>

        </section>
    )
}
