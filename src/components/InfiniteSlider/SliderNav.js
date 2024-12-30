import React, { useState } from "react";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import useDebounce from "../../hooks/useDebounce";

const SliderNav = ({ onPrev, onNext, itemsCount }) => {
  const [indicator, setIndicator] = useState(0);
  const debouncedFunction = useDebounce();

  const handleNextIndicator = () => {
    debouncedFunction(1000, () => {
      setIndicator((prev) => (prev + 1) % (itemsCount - 1));
    });
  };

  const handlePrevIndicator = () => {
    debouncedFunction(1000, () => {
      setIndicator((prev) => (prev === 0 ? itemsCount - 2 : prev - 1));
    });
  };

  return (
    // <div className='row center-x'>
    <div className="slider-nav row center-y s-between gap-20">
      <button
        type="button"
        className="center-gr"
        onClick={() => {
          onPrev();
          handlePrevIndicator();
        }}
      >
        <img width={8.5} src={arrowLeft} alt="left-arrow" />
      </button>
      <div className="slider-indicator">
        <div
          className="indicator-line"
          style={{ left: `${Math.min((100 / itemsCount) * indicator, 80)}%` }}
        ></div>
      </div>
      <button
        type="button"
        className="center-gr"
        onClick={() => {
          onNext();
          handleNextIndicator();
        }}
      >
        <img width={8.5} src={arrowRight} alt="right-arrow" />
      </button>
    </div>
    // </div>
  );
};

export default SliderNav;
