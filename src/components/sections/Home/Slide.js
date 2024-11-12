import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Slide = ({ image, isActive, index, onClick }) => {
    return (
        <motion.div
            onClick={() => onClick(index)}
            transition={{
                duration: 1,
                ease: [0.645, 0.045, 0.355, 1],
            }}
            layout
            className={`slider-item ${isActive ? 'active' : 'inactive'}`}
            style={{
                opacity: index < 14 ? 1 : 0.5,
                pointerEvents: isActive || index >= 12 || index === 0 ? 'none' : 'all'
            }}
        >
            <LazyLoadImage
                // visibleByDefault={true} 
                width={'100%'}
                height={'100%'}
                effect='blur'
                src={image} alt={`slider-image-${index + 1}`} />
        </motion.div>
    );
};

export default Slide;
