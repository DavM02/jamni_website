import React from 'react'
import './catalogCollections.css'
import Slide from './Slide'
import InfiniteSlider from '../../InfiniteSlider/InfiniteSlider'
export default function CatalogCollections({ sliderData }) {
    return (
        <section id='catalog-collections'>
            <div className='container'>
                <InfiniteSlider sliderData={sliderData} itemWidth={'catalog-slider-img-width'} wrapper={Slide} />
            </div>
        </section>
    )
}
