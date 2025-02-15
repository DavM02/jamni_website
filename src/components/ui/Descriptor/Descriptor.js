import React, { useState, } from 'react'
 import { LazyLoadImage } from 'react-lazy-load-image-component'
import AnimButton from '../buttons/AnimButton/AnimButton'
import SmoothAppearance from '../SmoothAppearance'
import { AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Descriptor({ data }) {
    const [showDescriptor, setShowDescriptor] = useState(false)
const navigate = useNavigate()
    return (
        data.map((el, i) => {
            return <div
                key={i}
                style={el.directions}
                className='descriptor-wrapper'
                onMouseLeave={() => setShowDescriptor(false)}
                onMouseEnter={() => setShowDescriptor(i)}
            >
                <div className='descriptor-circle big'>
                </div>
                <div className='descriptor-circle middle'>
                </div>
                <div className='descriptor-circle small'>
                </div>
                <AnimatePresence  >
                    {
                        (showDescriptor === i) && <SmoothAppearance
                            blur={true}
                            className={`descriptor ${el.title.toLowerCase().replace(' ', '-')}`}>
                            <div className='row gap-10 center-y'>
                                <LazyLoadImage
                                    width={'70px'}
                                    height={'70px'}
                                    effect='blur'
                                    src={el.img}
                                />
                                <div className='column'>
                                    <span className='xxsmall-text text-main text-black up-case'>{el.title}</span>
                                    <span className='xxxsmall-text text-main'>{el.subtitle}</span>
                                    <AnimButton onClick={()=> navigate('/catalog/decor')}>
                                        посмотреть
                                    </AnimButton>
                                </div>
                            </div>
                        </SmoothAppearance>
                    }
                </AnimatePresence>
            </div>
        })
    )
}
