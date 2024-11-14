import React, { useEffect, useContext, useRef } from 'react'
import './About.css'
import logo from '../../../assets/Jamni -.svg'
import img1 from '../../../assets/img_11.jpg'
import img2 from '../../../assets/img_12.jpg'
import Advantages from './Advantages'
 
export default function About() {

    return (
        <section id='about'>
            <div className='container' >
                <div className='text-center'>
                    <h2>О бренде</h2>
                    <span className='small-text text-main text-black up-case'>Познакомимся</span>
                </div>
                <div className='section-layout'>

                    <div className='xsmall-text text-main text-black'>
                        <p>
                            <img style={{ width: '210px', position: 'absolute' }} src={logo} alt='logo' />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            это ландшафтное ателье с дружной командой единомышленников, искренне любящих свое дело. Для каждого из нас это не просто работа, это одна маленькая жизнь, где мы создаём лёгкие, яркие и действительно качественные вещи для дома и сада.</p>
                        <p>Впереди ещё много открытий, знакомство с которымивам предстоит на страницах нашего сайта.</p>
                    </div>
                    <div className='row end-x'>
                        <div className='image'>
                            <img src={img1} alt='img-11' />
                        </div>
                        <div className='image'>
                            <img src={img2} alt='img-12' />
                        </div>
                    </div>
                </div>
                <Advantages/>
            </div>
        </section>
    )
}
