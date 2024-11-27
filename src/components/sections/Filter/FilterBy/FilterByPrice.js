import React from 'react'
import FilterAccordion from '../FilterAccordion'
import MultiRangeSlider from '../../../ui/RangeInput/MultiRangeSlider'
export default function FilterByPrice({ min, max, val }) {
  return (
    <div className="price-filter xsmall-text text-main text-black up-case">

      <FilterAccordion
        headline="цена"
        dataLength={1}
        elHeight={65}
        isOpen={true}
      >
        <MultiRangeSlider
          min={min}
          max={max}
          val={val}
        />
      </FilterAccordion>

    </div>
  )
}
