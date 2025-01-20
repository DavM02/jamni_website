import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AddToFav from '../../ui/buttons/AddToFav/AddToFav'
import { Link } from 'react-router-dom'
export default function Slide({ el, catalog }) {
 
    return (
        <Link to={`/catalog/${catalog}/${el.name.toLowerCase()}?id=${el.id}`}>
            <AddToFav data={el} />
            <div className='slider-image'
                style={{ height: el.slideId % 2 ? 'var(--moreitems-slider-img-height-even)' : 'var(--moreitems-slider-img-height-odd)' }}
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
        </Link>
    )
}
