import React, { useState } from 'react';
import useMediaQ from '../../../hooks/useMediaQ';
import Slide from './Slide';
import SliderNav from './SliderNav';
import img1 from '../../../assets/img_1.jpeg';
import img2 from '../../../assets/img_2.jpeg';
import img3 from '../../../assets/img_3.jpeg';
import img4 from '../../../assets/img_4.jpeg';
import img5 from '../../../assets/img_5.jpeg';

import useDebounce from '../../../hooks/useDebounce';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const slideImages = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

const Slider = () => {
    const query = useMediaQ('(max-width: 1024px)');
    const [activeSlide, setActiveSlide] = useState(0);
    const maxTransformIndex = 10;
    const debouncedFunction = useDebounce();

    const handleNextSlide = () => {
        debouncedFunction(300, () => {
            setActiveSlide((prev) => Math.min(prev + 1, maxTransformIndex));
        })
    };

    const handlePrevSlide = () => {
        debouncedFunction(300, () => {
            setActiveSlide((prev) => Math.max(prev - 1, 0));
        })
    };

    const handleSlideByIndex = (id) => {
        debouncedFunction(300, () => {
            setActiveSlide((prev) => Math.max(id - 1, 0));
        })
    };

    return (
        <div className='slider-container'>
            {query && <div className='mobile-slider'>
                <LazyLoadImage
                    width={'100%'}
                    height={'100%'}
                    effect='blur'
                    src={slideImages[activeSlide + 1]}
                    alt={`slider-image-${activeSlide + 1}`} />
            </div>}
            <div
                className='slider-wrapper row'
                style={{
                    left: `calc((-1 * var(--home-slider-img-size) - var(--home-slider-gap)) * ${activeSlide})`,
                }}
            >
                {slideImages.map((el, i) => (
                    <Slide
                        key={i}
                        image={el}
                        index={i}
                        isActive={i === activeSlide + 1}
                        onClick={handleSlideByIndex}
                    />
                ))}
            </div>
            {!query && (
                <SliderNav
                    onPrev={handlePrevSlide}
                    onNext={handleNextSlide}
                    isPrevDisabled={activeSlide === 0}
                    isNextDisabled={activeSlide === maxTransformIndex}
                />
            )}
        </div>
    );
};

export default Slider;