import React, { useEffect, useState } from 'react'
import img1 from '../../../../assets/img_13.webp'
import img2 from '../../../../assets/img_14.webp'
import img3 from '../../../../assets/sofas/img_1.jpg'
import img4 from '../../../../assets/beds/img_5.webp'
import img5 from '../../../../assets/beds/img_4.webp'
import useMediaQ from '../../../../hooks/useMediaQ'
// import './slider.css'
import SliderNav from './SliderNav'
import Slide from './Slide'
export default function Slider() {

    const slideData = [{
        image: img1,
        name: 'ДИВАНЫ И КРЕСЛА ЧЕСТЕРФИЛД',
        description: 'Как использовать традиционную мягкую мебель при оформлении интерьеров в разных стилях.'
    }, {
        image: img2,

        name: "Jamni на HELPER'S BAZAR",
        description: "Погрузитесь в этот день вместе с нами и нашей мебелью."
    }, {
        image: img3,
        name: `Эфиры передачи "Дачный ответ" с нашей мебелью`,
        description: "Иногда героями передач становятся изделия из нашей стандартной коллекции, а иногда нам выпадает большая честь – изготавливать мебель по эксклюзивным проектам авторов!."
    }, {
        image: img4,
        name: "фото с нашей мебелью в интерьерах покупателей",
        description: "Подборка фото от наших покупателей."
    }, {
        image: img5,
        name: "Как устроены наши кровати",
        description: "Отвечаем на ваши вопросы о наших кроватях."
    },]

    const [transformIndex, setTransformIndex] = useState(0)
    const [activeSlide, setActiveSlide] = useState(7)
    const [adjustTransition, setAdjustTransition] = useState(false)
    const [indicator, setIndicator] = useState(0);

    const query = useMediaQ('(max-width: 769px)');
    function handleNextSlide() {
        setAdjustTransition(true)
        setTransformIndex((prev) => (prev - 1))
        setActiveSlide((prev) => (prev + 1))
    }

    function handlePrevSlide() {
        setAdjustTransition(true)
        setTransformIndex((prev) => (prev + 1))
        setActiveSlide((prev) => (prev - 1))
    }

    function handleTransitionEnd(e) {
        if (e.propertyName === 'left') {
            setAdjustTransition(false)
        }
    }

    useEffect(() => {
        setTransformIndex(0)
        setIndicator(0)
        setActiveSlide(7)
    }, [query])

    return (<>

        <div className='slider-container'>
            <div className='slider-wrapper row gap-20'
                onTransitionEnd={(e) => handleTransitionEnd(e)}
                style={{
                    transition: adjustTransition ? 'var(--transition) 1s left' : 'none',
                    left: `calc(${transformIndex} * (var(--projects-slider-img-width) + 20px))`,
                }}
            >
                {
                    [...slideData, ...slideData, ...slideData].map((el, i) => {
                        return <Slide
                            key={i}
                            activeSlide={activeSlide}
                            el={{ index: i, ...el }}
                            adjustTransition={adjustTransition}
                        />
                    })
                }
            </div>

        </div>
        <SliderNav
            indicator={indicator}
            transformIndex={transformIndex}
            setIndicator={setIndicator}
            onPrev={handlePrevSlide}
            onNext={handleNextSlide}
        />
    </>

    )
}
