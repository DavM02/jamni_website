import React from 'react';
import './home.css';
import './media.css'
import Slider from './Slider/Slider';
export default function Home() {
     return (
        <section id='home'>
            <div className='container'>
                <Slider />
                
                <div className='headline'>
                    <div className='years row gap-10 text-black'>
                        <span> 2013</span>
                        <span>—</span>
                        <span>{new Date().getFullYear()}</span>
                    </div>
                    <h3 className='text-center'>
                        Изысканная <br /> мебель - оживляющая <br /> пространство
                    </h3>
                </div>
            </div>
        </section>
    );
}
