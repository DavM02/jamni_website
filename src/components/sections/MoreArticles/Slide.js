import React from 'react'
import NewsItem from '../News/NewsItem/NewsItem'

export default function Slide({ el, adjustTransition, transformIndex }) {
    return (
        <div
            className='slider-item'
            style={{
                left: `calc((var(--moreitems-slider-img-width) + 20px) * ${transformIndex})`,
                transition: adjustTransition ? 'var(--transition) left 0.7s' : 'unset'
            }}
        >

            <NewsItem
                el={{ ...el, title: el.title.split(' ').slice(0, 4).join(' ') + '...' 
                    , description: el.description.split(' ').slice(0, 20).join(' ') + '...'}} 
            
            height={el.id % 2 ? 'var(--moreitems-slider-img-height-even)' : 'var(--moreitems-slider-img-height-odd)' } />
        </div>
    )
}
