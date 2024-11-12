import React from 'react';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import arrowRight from '../../../assets/icons/arrow-right.svg';

const SliderNav = ({ onPrev, onNext, isPrevDisabled, isNextDisabled }) => {
    return (
        <div className='slider-nav row s-between'>
            <button type='button' className='center-gr' onClick={onPrev} disabled={isPrevDisabled}>
                <img width={8.5} src={arrowLeft} alt="left-arrow" />
            </button>
            <button type='button' className='center-gr' onClick={onNext} disabled={isNextDisabled}>
                <img width={8.5} src={arrowRight} alt="right-arrow" />
            </button>
        </div>
    );
};

export default SliderNav;
