import React from 'react';
import Observer from './Observer';
import './scroll.css'
function AnimatedText({ text, as: Tag, center}) {
    let index = 0;

    return (
        <Observer className='heading-wrapper'>
            <Tag className={`row wrap ${center ? 'center-x' : ''} gap-30-y`}>
                {text.split(' ').map((word, i) => (
                    <div key={i} className='row no-wrap'>
                        {word.split('').map((letter, j) => {
                            const currentIndex = index++;
                            return (
                                <span key={currentIndex} style={{ transitionDelay: `${currentIndex / 20}s` }}>
                                    {letter}
                                </span>
                            );
                        })}
                    </div>
                ))}
            </Tag>
        </Observer>
    );
}

export default AnimatedText;
