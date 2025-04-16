import React, { useEffect, useRef } from 'react';
import './cursor.css';
import useMediaQ from '../../hooks/useMediaQ';

export default function Cursor() {
    const posRef = useRef(null);
    const query = useMediaQ('(max-width: 1024px)');
    const animationFrameId = useRef(null);  

    useEffect(() => {
        if (query) return;
        const updateCursor = (e) => {
            const { clientX, clientY } = e;

            if (posRef.current) {
                cancelAnimationFrame(animationFrameId.current);  
                animationFrameId.current = requestAnimationFrame(() => {
                    posRef.current.style.transform = `translate(${clientX - posRef.current.offsetWidth / 2}px, 
                        ${clientY - posRef.current.offsetHeight / 2}px)`;
                });
            }
        };

        document.body.addEventListener('mousemove', updateCursor);

        return () => {
            document.body.removeEventListener('mousemove', updateCursor);
            cancelAnimationFrame(animationFrameId.current);  
        };
    }, [query]);

    return (!query && <div className='custom-cursor' ref={posRef}></div>);
}
