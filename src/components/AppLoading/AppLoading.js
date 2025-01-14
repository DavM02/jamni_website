import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from "react-dom";

import img1 from '../../assets/img_6.webp';
import img2 from '../../assets/img_7.webp';
import img3 from '../../assets/img_8.webp';
import img4 from '../../assets/img_9.webp';
import img5 from '../../assets/img_10.webp';
import img6 from '../../assets/img_11.webp';
import img7 from '../../assets/img_12.webp';
import img8 from '../../assets/img_13.webp';
import img9 from '../../assets/img_14.webp';
import img10 from '../../assets/beds/img_5.webp';

export default function AppLoading({ setRenderApp }) {
    function generateRandomNumber() {
        return Math.min(9, Math.floor(Math.random() * 9));
    }

    const numbers = useMemo(() => [
        Array(22).fill(null).map((el, i) => i === 0 ? 1 : generateRandomNumber()),
        Array(22).fill(null).map((el, i) => i === 0 ? 0 : generateRandomNumber()),
        Array(22).fill(0 + '%')
    ], []);

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
 
        const isAnimationCompleted = sessionStorage.getItem('animationCompleted');
        if (isAnimationCompleted) {
            setRenderApp(true);
            setLoaded(3);
        } else {
            setTimeout(() => {
                setLoaded(1);
                sessionStorage.setItem('animationCompleted', 'true');
            }, 100);
          
        }

        return (() => {
            sessionStorage.removeItem('animationCompleted')
        })

    }, [setRenderApp]);


    return (
        <>
            {
                loaded !== 3 && ReactDOM.createPortal(
                    <div id='app-loading'
                        onTransitionEnd={(e) => {
                            if (e.target.id === 'app-loading') {
                                setLoaded(3);
                            }
                        }}
                        style={{ clipPath: loaded >= 2 ? 'inset(0 0 100% 0)' : 'inset(0)' }}>
                        <div className='app-loading-images'
                            onTransitionEnd={(e) => {
                                setRenderApp(true);
                            }}
                            style={{ clipPath: loaded >= 2 ? 'inset(0 0 100% 0)' : 'inset(0)' }}>
                            {images.map((el, i) => {
                                return <div key={i}
                                    id={i}
                                    onTransitionEnd={(e) => {
                                        e.stopPropagation();
                                        if (e.currentTarget.id == 9) { setLoaded(2); }
                                    }}
                                    style={{
                                        clipPath: loaded >= 1 ? 'inset(0)' : 'inset(0 100% 0 0)',
                                        zIndex: i + 1, transitionDelay: `${(i + 1) * 0.3}s`,
                                    }} className='image'>
                                    <img src={el} alt={`img-${i + 1}`} />
                                </div>
                            })}
                        </div>
                        <div className='row gap-5'>
                            {numbers.map((el, i) => {
                                return <div className='column'
                                    style={{
                                        transitionDelay: `${(i + 1) * 0.3}s`,
                                        transform: loaded === 0 ? `translateY(calc(var(--loading-height) * -21))` : 'none'
                                    }} key={i}>
                                    {el.map((num, j) => {
                                        return <h1 key={j}>{num}</h1>
                                    })}
                                </div>
                            })}
                        </div>
                    </div>, document.getElementById('modal-root'))
            }
        </>
    );
}
