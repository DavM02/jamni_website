import React, { useEffect, useRef, useState } from 'react';
import img6 from '../../../assets/img_6.webp';
import img7 from '../../../assets/img_7.webp';
import img8 from '../../../assets/img_8.jpeg';
import img9 from '../../../assets/img_9.webp';
import img10 from '../../../assets/img_10.webp';
import arrow from '../../../assets/icons/arrow-left-small.svg';
import SliderNav from './SliderNav';
import useDebounce from '../../../hooks/useDebounce';
import Slide from './Slide';

export default function Slider() {
    const initialItems = [
        { name: "Лампа Pompidou", image: img6 },
        { name: "Кресло Lounge", image: img7 },
        { name: "Кровать Foster", image: img8 },
        { name: "Свечи Foster", image: img9 },
        { name: "Диван Foster", image: img10 },
        { name: "Лампа Pompidou", image: img6 },
        { name: "Кресло Lounge", image: img7 },
        { name: "Кровать Foster", image: img8 },
        { name: "Свечи Foster", image: img9 },
        { name: "Диван Foster", image: img10 },
    ].map((item, index) => ({ ...item, id: index }));

    const [slideItems, setSlideItems] = useState(initialItems);
    const [transformIndex, setTransformIndex] = useState(0);
    const [adjustTransition, setAdjustTransition] = useState(false)
    const debouncedFunction = useDebounce();
    const timeoutId = useRef(null);

    const handleNextSlide = () => {
        setAdjustTransition(true)
        debouncedFunction(700, () => {
            setTransformIndex((prevIndex) => prevIndex + 1);
            timeoutId.current = setTimeout(() => {
                setSlideItems((prevItems) => {
                    const [firstItem, ...restItems] = prevItems;
                    return [...restItems, firstItem];
                });
                setTransformIndex(0);
                setAdjustTransition(false)
            }, 700);
        });
    };

    const handlePrevSlide = () => {
        setAdjustTransition(true)
        debouncedFunction(700, () => {
            setTransformIndex((prevIndex) => prevIndex - 1);
            timeoutId.current = setTimeout(() => {
                setSlideItems((prevItems) => {
                    const lastItem = prevItems[prevItems.length - 1];
                    return [lastItem, ...prevItems.slice(0, -1)];
                });
                setTransformIndex(0);
                setAdjustTransition(false)
            }, 700);
        });
    };

    useEffect(() => {
        return () => clearTimeout(timeoutId.current);
    }, []);

    return (
        <>
            <div className='slider-container'>
                <div className='heading-wrapper'>
                    <h1 className='text-center'>Бестселлеры</h1>
                </div>
                <div className='learn-mone row gap-15' >
                    <span className='text-main xsmall-text up-case'>смотреть больше</span>
                    <img src={arrow} alt='image-left' style={{width: '25px'}}/>
                </div>
                <div className='slider-wrapper'>
                    {slideItems.map((el, i) => (
                        <Slide
                            key={el.id}
                            adjustTransition={adjustTransition}
                            transformIndex={i - transformIndex}
                            el={el}
                        />
                    ))}
                </div>
            </div>
            <SliderNav
                onPrev={handlePrevSlide}
                onNext={handleNextSlide}
                itemsCount={slideItems.length}
            />
        </>
    );
}
