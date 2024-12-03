import React from 'react'
import './moreProducts.css'
import InfiniteSlider from '../../InfiniteSlider/InfiniteSlider'
import img1 from '../../../assets/decor/img_2.webp'
import img2 from '../../../assets/img_17.webp'
import img3 from '../../../assets/img_8.webp'
import img4 from '../../../assets/img_19.webp'
import img5 from '../../../assets/img_6.webp'

import Slide from './Slide'

export default function MoreProducts() {

    const sliderData = [
        {
            "image": img1,
            "name": "ramani",
            "price": 5000,
        },
        {
            "image": img2,
            "name": "foster",
            "price": 15000,
        },
        {
            "image": img3,
            "name": "Petrified",
            "price": 7000,
        },
        {
            "image": img4,
            "name": "ivory",
            "price": 3000,
        },
        {
            "image": img5,
            "name": "foster",
            "price": 3000,
        },
        {
            "image": img1,
            "name": "ramani",
            "price": 5000,
        }, {
            "image": img2,
            "name": "foster",
            "price": 15000,
        },

        {
            "image": img3,
            "name": "Petrified",
            "price": 7000,
        },
        {
            "image": img4,
            "name": "ivory",
            "price": 3000,
        },
        {
            "image": img5,
            "name": "foster",
            "price": 3000,
        },

    ]

    return (
        <section id='more-products'>
            <div className='container'>
                <div className='text-center'>
                    <h2>еще товары</h2>
                    <span className='small-text text-main text-black up-case'>вам может понравиться</span>
                </div>
                <InfiniteSlider sliderData={sliderData} wrapper={Slide} />
            </div>
        </section>
    )
}
