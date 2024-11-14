import React from 'react'
import './catalogIntro.css'
import InfiniteSlider from '../../InfiniteSlider/InfiniteSlider'
import Slide from './Slide'
export default function CatalogIntro({ bg, headline, text, sliderData }) {
    return (
        <section id='catalog-intro'>
            <div className='catalog-bg text-center center-gr up-case'
                style={{ backgroundImage: `url(${bg})` }}
            >
                <h2 className='text-light'>{headline}</h2>
                <p className='small-text text-main text-light'>{text}</p>
            </div>
          <div className='container'>
                <InfiniteSlider sliderData={sliderData} wrapper={Slide} />
          </div>
        </section>
    )
}
