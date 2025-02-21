import React, { useLayoutEffect, useRef, useContext } from "react";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { MainContext } from "../../context/MainContext";
import "./scroll.css";
import useMediaQ from "../../hooks/useMediaQ";
export default function SmoothScroll({ children }) {
  const { scrollbarAccess, setHeaderHeight } =
    useContext(MainContext);
  const scrollRef = useRef(null);
  const query = useMediaQ("(min-width: 767px)");


  useLayoutEffect(() => {
    let scrollbar;


    if ("scrollRestoration" in window.history) {
      console.log('done')
      window.history.scrollRestoration = "manual";
    }

    if (query) {
      const initScrollbar = () => {
        if (scrollRef.current) {
          scrollbar = Scrollbar.init(scrollRef.current, {
            damping: 0.07,
            alwaysShowTrack: true,
            renderByPixels: true,
          });

          scrollbarAccess.current = scrollbar;
          scrollbarAccess.current.addListener(({ offset }) => {
            if (offset.y > 78) {
              setHeaderHeight.current(
                "calc(30px - 55px - (var(--header-container-padding)*2))"
              );
            } else {
              setHeaderHeight.current("30px");
            }
          });
        }
      };

       initScrollbar();
    }

      return () => {
        setHeaderHeight.current("30px");
        if (scrollbar) {
          scrollbar.destroy();
          scrollbarAccess.current = null;
          console.log(scrollbarAccess.current)
        }
      };

  }, [query, scrollbarAccess]);

  return (
    <div
      id="scroll-wrapper"
      style={{
        position: query ? "fixed" : "unset",
        height: query ? "unset" : "100%",
      }}
      ref={scrollRef}
    >
      {children}
    </div>
  );
}

class OverflowPlugin extends ScrollbarPlugin {
  static pluginName = "overflow";

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

Scrollbar.use(OverflowPlugin);
