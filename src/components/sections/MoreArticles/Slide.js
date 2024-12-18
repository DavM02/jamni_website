import React from 'react'
import NewsItem from '../News/NewsItem/NewsItem'

export default function Slide({ el}) {
    return (
 

            <NewsItem
                el={{ ...el, description: el.description.split(' ').slice(0, 8).join(' ') + '...'}} 
            
            height={el.id % 2 ? 'var(--moreitems-slider-img-height-even)' : 'var(--moreitems-slider-img-height-odd)' } />
 
    )
}
