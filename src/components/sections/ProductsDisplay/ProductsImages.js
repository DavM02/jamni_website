import React, { useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import SmoothAppearance from '../../ui/SmoothAppearance'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export default function ProductsImages({ category, getImages, data }) {
    
    const getIndex = useMemo(() => {
        return data.flatMap((el, i) => {
            return el
        })
    }, [data])

    return (
        <AnimatePresence mode='wait'>
            {
                <SmoothAppearance key={category}  className='image-group'>
                    {getImages && Object.entries(getImages).map((img, index) => (
                        new RegExp(`(^|/)${category}($|/)`).test(img[0]) &&
                        <div
                            className={`image ${getIndex.indexOf(category) % 2 === 0 ? 'even' : 'odd'}`}
                            key={index}
                        >
                                <LazyLoadImage effect="blur" 
                                width="100%"  
                                height="100%"
                                src={img[1]} 
                                alt={`product ${index + 1}`} />
                        </div>
                    ))}

                </SmoothAppearance>
            }
        </AnimatePresence>
    )
}
