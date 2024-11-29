import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Slide({ el, adjustTransition, transformIndex }) {
    return (
        <div
            className='slider-item'
            style={{
                left: `calc((var(--bestsellers-slider-img-width) + 20px) * ${transformIndex})`,
                transition: adjustTransition ? 'var(--transition) left 0.7s' : 'unset'
            }}
        >
            <div className='slider-image'>
                <LazyLoadImage
                    // visibleByDefault={true} 
                    src={el.image}
                    width={'100%'}
                    height={'100%'}
                    effect='blur'
                    alt={`slider-image-${el.id + 1}`} />
            </div>
            <span className='small-text text-main text-black up-case'>{el.name}</span>
        </div>
    )
}
