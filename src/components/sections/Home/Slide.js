import React from 'react';
import { motion } from 'framer-motion';

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
            <img src={image} alt={`slider-image-${index + 1}`}/>
        </motion.div>
    );
};

export default Slide;
