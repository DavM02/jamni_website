import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AddToFav from '../../Cart/Favorites/AddToFav'

export default function Slider({ el, adjustTransition, transformIndex }) {
    return (
        <div
            className='slider-item'
            style={{
                left: `calc((var(--moreproducts-slider-img-width) + 20px) * ${transformIndex})`,
                transition: adjustTransition ? 'var(--transition) left 0.7s' : 'unset'
            }}
        >
            <AddToFav/>
            <div className='slider-image'
                style={{ height: el.id % 2 ? 'var(--moreproducts-slider-img-height-even)' : 'var(--moreproducts-slider-img-height-odd)'}}
            >
                <LazyLoadImage
                    // visibleByDefault={true} 
                    src={el.image}
                    width={'100%'}
                    height={'100%'}
                    effect='blur'
                    alt={`slider-image-${el.id + 1}`} />
            </div>
           <div>
                <span className='xxsmall-text text-main text-black up-case'>{el.name}</span>
                <span className='xxxsmall-text  text-main text-black'>{el.price.toLocaleString('ru-RU')} руб.</span>
           </div>
        </div>
    )
}
