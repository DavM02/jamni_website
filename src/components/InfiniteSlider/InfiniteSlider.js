import React, { useEffect, useRef, useState } from "react";
import SliderNav from "./SliderNav";
import useDebounce from "../../hooks/useDebounce";
import SlideItemWrapper from "./SlideItemWrapper";

export default function InfiniteSlider({
  sliderData,
  wrapper: WrapperComponent,
  children,
  itemWidth,
  Tag = "div",
  ...props
}) {
  const initialItems = sliderData.map((item, index) => ({
    ...item,
    slideId: index,
  }));

  const [slideItems, setSlideItems] = useState(initialItems);
  const [transformIndex, setTransformIndex] = useState(0);
  const [adjustTransition, setAdjustTransition] = useState(false);
  const debouncedFunction = useDebounce();
  const timeoutId = useRef(null);

  const handleNextSlide = () => {
    setAdjustTransition(true);
    debouncedFunction(900, () => {
      setTransformIndex((prevIndex) => prevIndex + 1);
      timeoutId.current = setTimeout(() => {
        setSlideItems((prevItems) => {
          const [firstItem, ...restItems] = prevItems;
          return [...restItems, firstItem];
        });
        setTransformIndex(0);
        setAdjustTransition(false);
      }, 900);
    });
  };

  const handlePrevSlide = () => {
    setAdjustTransition(true);
    debouncedFunction(800, () => {
      setTransformIndex((prevIndex) => prevIndex - 1);
      timeoutId.current = setTimeout(() => {
        setSlideItems((prevItems) => {
          const lastItem = prevItems[prevItems.length - 1];
          return [lastItem, ...prevItems.slice(0, -1)];
        });
        setTransformIndex(0);
        setAdjustTransition(false);
      }, 800);
    });
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId.current);
  }, []);

  return (
    <>
      <div className="slider-container infinite-slider">
        {children}
        <div className="slider-wrapper">
          {slideItems.map((el, i) => (
            <SlideItemWrapper
              key={el.slideId}
              adjustTransition={adjustTransition}
              transformIndex={i - transformIndex}
              Tag={Tag}
              width={itemWidth}
            >
              <WrapperComponent el={el}
                {...props}
              />
            </SlideItemWrapper>
          ))}
        </div>
      </div>

      <SliderNav
        hideNav={props.hideNav}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
        itemsCount={slideItems.length}
      />

    </>
  );
}
