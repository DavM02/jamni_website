import React, { useEffect, useRef } from 'react'
import './cursor.css'
import useMediaQ from '../../hooks/useMediaQ';
export default function Cursor() {

    const posRef = useRef(null)

    const query = useMediaQ('(max-width: 1024px)');

    const isTouchDevice = () => {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };

    useEffect(() => {


        const updateCursor = (e) => {

            const { clientX, clientY } = e;
            if (posRef.current) {
                posRef.current.style.transform = `translate(${posRef.current && clientX - posRef.current.offsetWidth / 2}px,
            ${posRef.current && clientY - posRef.current.offsetHeight / 2}px)`;
            }
        }
        document.body.addEventListener('mousemove', updateCursor)

        return () => {
            document.body.removeEventListener('mousemove', updateCursor)

        }
    }, [])
    return (!query && <div className='custom-cursor' ref={posRef}>
    </div>

    )
}
