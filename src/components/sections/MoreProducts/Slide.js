import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AddToFav from '../../ui/buttons/AttToFav/AddToFav'
export default function Slide({ el }) {
 
    return (
        <>
            <AddToFav/>
            <div className='slider-image'
                style={{ height: el.slideId % 2 ? 'var(--moreitems-slider-img-height-even)' : 'var(--moreitems-slider-img-height-odd)'}}
            >
                <LazyLoadImage
                    // visibleByDefault={true} 
                    src={el.images[1]}
                    width={'100%'}
                    height={'100%'}
                    effect='blur'
                    alt={`slider-image-${el.id + 1}`} />
            </div>
           <div>
                <span className='xxsmall-text text-main text-black up-case'>{el.name}</span>
                <span className='xxxsmall-text  text-main text-black'>{el.price.toLocaleString('ru-RU')} руб.</span>
           </div>
        </>
    )
}
