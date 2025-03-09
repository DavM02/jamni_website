import { useCallback, useEffect, useState, useRef, useContext } from "react";
 import useFilter from "../../../../hooks/useFilter";
import { MainContext } from "../../../../context/MainContext";

const MultiRangeSlider = ({ min, max, val, filterParam }) => {
 
  const { handleSearchParams: handleMinParam, allFilterParams: minParam } = useFilter(`min${filterParam}`);
  const { handleSearchParams: handleMaxParam, allFilterParams: maxParam } = useFilter(`max${filterParam}`);

  const [minVal, setMinVal] = useState(Math.max(minParam[0] ?? min, min));
  const [maxVal, setMaxVal] = useState(Math.min(maxParam[0] ?? max, max));
  const { scrollbarAccess } = useContext(MainContext)
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
 
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  function allowScroll() {
    scrollbarAccess.current.updatePluginOptions('overflow', { open: false })
  }

  function disableScroll() {
    scrollbarAccess.current.updatePluginOptions('overflow', { open: true })
  }

  return (
    <div className="range-input"
>
      <div className="values row s-between gap-5 xxxsmall-text center-y">
        <div className="slider-left-value center-gr">{minVal.toLocaleString('ru-RU')} {val}</div>
        <span>—</span>
        <div className="slider-right-valu center-gr">{maxVal.toLocaleString('ru-RU')} {val}</div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onTouchStart={() => disableScroll()}
        onTouchEnd={() => { handleMinParam(minVal); allowScroll() }}
        onTouchCancel={() => { handleMinParam(minVal); allowScroll() }}
        onMouseUp={() => { handleMinParam(minVal); allowScroll() }}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
        }}
        className="thumb thumb-left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onTouchStart={() => disableScroll()}
        onTouchCancel={() => { handleMaxParam(maxVal); allowScroll() }}
        onTouchEnd={() => { handleMaxParam(maxVal); allowScroll() }}
        onMouseUp={() => { handleMaxParam(maxVal); allowScroll() }}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
        }}
        className="thumb thumb-right"
      />

      <div className="slider"

      >
        <div className="slider-track" />
        <div ref={range} className="slider-range" />
      </div>
    </div>
  );
};

export default MultiRangeSlider;
