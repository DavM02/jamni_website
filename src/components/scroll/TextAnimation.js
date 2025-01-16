import React from 'react';
import Observer from './Observer';

function AnimatedText({ text, as, center}) {
    let index = 0;

    return (
        <Observer className='heading-wrapper'>
            <div className={`${as} row wrap ${center ? 'center-x' : ''} gap-30-y`}>
                {text.split(' ').map((word, i) => (
                    <div key={i} className='row no-wrap'>
                        {word.split('').map((letter, j) => {
                            const currentIndex = index++;
                            return (
                                <span key={currentIndex} style={{ transition: `var(--transition) 1s ${currentIndex / 20}s filter, var(--transition) 1s ${currentIndex / 20}s opacity` }}>
                                    {letter}
                                </span>
                            );
                        })}
                    </div>
                ))}
            </div>
        </Observer>
    );
}

export default AnimatedText;
