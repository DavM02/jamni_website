import React, { useState } from 'react';
import './addToCartButton.css';

export default function AddToCartButton({...props}) {
    const [isAnimation, setIsAnimating] = useState(false);
    const [allowAnim, setAllowAnim] = useState(true)
    const [entered, setEntered] = useState(false)
 
    function handleAnim() {

        if (allowAnim) {
            setIsAnimating((prev) => !prev);
            setAllowAnim(false)
        }
    }

    return (
        <button
           {...props}
            type="submit"
            className={`add-to-cart-btn ${isAnimation ? 'anim' : 'no-anim'} ${isAnimation ? 'transform-back' : 'initial'}`}
            onMouseEnter={(e) => {
                handleAnim()
                setEntered(true)
            }}

            onMouseLeave={(e) => {
                handleAnim()
                setEntered(false)
            }}
            onTransitionEnd={(e) => {
                if (e.target.classList.contains('anim') && !allowAnim && !entered) {
                    setIsAnimating(false)
                } else {
                    setAllowAnim(true)
                }
            }}

        >
            <span className="xsmall-text text-main up-case">добавить в корзину</span>
        </button>
    );
}
