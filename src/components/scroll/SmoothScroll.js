import React, { useLayoutEffect, useRef, useContext } from 'react';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import { MainContext } from '../../context/MainContext';

export default function SmoothScroll({ children }) {
    const scrollRef = useRef(null);
    const { scrollbarAccess } = useContext(MainContext);
     useLayoutEffect(() => {
        let scrollbar;

        const initScrollbar = () => {
            if (scrollRef.current) {
                scrollbar = Scrollbar.init(scrollRef.current, {
                    damping: 0.09,
                    alwaysShowTrack: true,
                    renderByPixels: true,
                });

                scrollbarAccess.current = scrollbar;
            }
        };

        const handleResize = () => {
            if (scrollRef.current) {
                initScrollbar();
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);
        if (scrollRef.current) {
            resizeObserver.observe(scrollRef.current); 
        }
 
        return () => {
            if (scrollbar) {
                scrollbar.destroy();
            }
            resizeObserver.disconnect();
        };
    }, []);  

    return (
        <div id="scroll-wrapper" ref={scrollRef}>
            {children}
        </div>
    );
}

class OverflowPlugin extends ScrollbarPlugin {
    static pluginName = 'overflow';

    static defaultOptions = {
        open: false,
    };

    transformDelta(delta) {
        return this.options.open ? { x: 0, y: 0 } : delta;
    }
}

Scrollbar.use(OverflowPlugin);
