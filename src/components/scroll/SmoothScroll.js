import React, { useEffect, useLayoutEffect } from 'react'
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import { useRef, useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { useLocation } from 'react-router-dom';
export default function SmoothScroll({ children }) {
    const scrollRef = useRef(null);
    const { scrollbarAccess } = useContext(MainContext)

 
    
    useLayoutEffect(() => {
        let scrollbar;

        const initScrollbar = () => {
            scrollbar = Scrollbar.init(scrollRef.current, {
                damping: 0.09,
                alwaysShowTrack: true,
                renderByPixels: true,
            });

        };

        initScrollbar();
        scrollbarAccess.current = scrollbar
        return () => {
            if (scrollbar) {
                scrollbar.destroy();
            }
        };
    }, []);

    return (

        <div id="scroll-wrapper"
            ref={scrollRef}>
            {children}
        </div>

    )
}


// class OverflowPlugin extends ScrollbarPlugin {
//     static pluginName = 'overflow';

//     static defaultOptions = {
//         open: false,
//     };

//     transformDelta(delta) {
//         return this.options.open ? { x: 0, y: 0 } : delta;
//     }
// }

// Scrollbar.use(OverflowPlugin);

