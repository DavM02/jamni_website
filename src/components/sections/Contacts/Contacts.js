import React from 'react'
import './contacts.css'
import Map from './Map'
export default function Contacts() {
    return (
        <section id='contacts'>
            <div className='container'>
                <div className='text-center'>
                    <h2>контакты</h2>
                    <span className='small-text text-main text-black up-case'>Мы открыты к сотрудничеству и предложениям</span>
                </div>
                <div className='section-layout'>
                    <div></div>
                    <div></div>
              <div>
                        <Map />
              </div>
                </div>
            </div>
        </section>
    )
}
