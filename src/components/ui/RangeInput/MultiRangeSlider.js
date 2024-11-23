import React, { useCallback, useEffect, useState, useRef, useContext } from "react";
 
import "./multiRangeSlider.css";
import { MainContext } from "../../../context/MainContext";
const MultiRangeSlider = ({ min, max, onChange }) => {
  
  const handleScrollPrevent = () => {
    scrollbarAccess.current.updatePluginOptions('overflow', { open: true })
  }

  const handleScrollAllow = () => { 
    scrollbarAccess.current.updatePluginOptions('overflow', { open: false })
  }

  const {scrollbarAccess} = useContext(MainContext)

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

   const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

 
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  
  return (
    <div className="range-input"
    
    >
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onMouseLeave={() => handleScrollAllow()}
        onTouchEnd={() => handleScrollAllow()}
        onTouchCancel={() => handleScrollAllow()}
        onChange={(event) => {
          handleScrollPrevent()
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onTouchCancel={() => handleScrollAllow()}
        onTouchEnd={() => handleScrollAllow()}
        onMouseLeave={() => handleScrollAllow()}
        onChange={(event) => {
          handleScrollPrevent()
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal.toLocaleString('ru-RU')}</div>
        <div className="slider__right-value" >{maxVal.toLocaleString('ru-RU')}</div>
      </div>
    </div>
  );
};
 

export default MultiRangeSlider;
