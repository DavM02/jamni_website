import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

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
    const generateRandomNumber = () => Math.min(9, Math.floor(Math.random() * 9));

    const numbers = useMemo(() => [
        Array.from({ length: 22 }, (_, i) => (i === 0 ? 1 : generateRandomNumber())),
        Array.from({ length: 22 }, (_, i) => (i === 0 ? 0 : generateRandomNumber())),
        Array(22).fill('0%')
    ], []);

    const images = useMemo(() => [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10], []);
    const [loaded, setLoaded] = useState(0);
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);

    useEffect(() => {
        let loadedImagesCount = 0;

        images.forEach((imgSrc) => {

            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = imgSrc;
            link.as = 'image';
            document.head.appendChild(link);

            const img = new Image();
            img.src = imgSrc;
            img.onload = () => {
                loadedImagesCount += 1;
                if (loadedImagesCount === images.length) {
                    setAllImagesLoaded(true);
                }
            };
        });
    }, [images]);

    useEffect(() => {

        if (allImagesLoaded)  {
            setTimeout(() => setLoaded(1), 100);
            sessionStorage.setItem('animationCompleted', 'true');
        }


    }, [allImagesLoaded]);

    return createPortal(
        <div
            id='app-loading'
            onTransitionEnd={(e) => e.target.id === 'app-loading' && setRenderApp('hide')}
            style={{ clipPath: loaded >= 2 ? 'inset(0 0 100% 0)' : 'inset(0)' }}
        >
            <div
                className='app-loading-images'
                onTransitionEnd={() => setRenderApp('show')}
                style={{ clipPath: loaded >= 2 ? 'inset(0 0 100% 0)' : 'inset(0)' }}
            >
                {images.map((el, i) => (
                    <div
                        key={i}
                        id={String(i)}
                        onTransitionEnd={(e) => {
                            e.stopPropagation();
                            if (parseInt(e.currentTarget.id, 10) === 9) setLoaded(2);
                        }}
                        style={{
                            clipPath: loaded >= 1 ? 'inset(0)' : 'inset(0 100% 0 0)',
                            zIndex: i + 1,
                            transitionDelay: `${(i + 1) * 0.3}s`,
                        }}
                        className='image'
                    >
                        <img src={el} alt={`img-${i + 1}`} />
                    </div>
                ))}
            </div>
            <div className='row gap-5'>
                {numbers.map((column, i) => (
                    <div
                        className='column'
                        key={i}
                        style={{
                            transitionDelay: `${(i + 1) * 0.3}s`,
                            transform: loaded === 0 ? `translateY(calc(var(--loading-height) * -21))` : 'none',
                        }}
                    >
                        {column.map((num, j) => (
                            <h1 key={j}>{num}</h1>
                        ))}
                    </div>
                ))}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}
