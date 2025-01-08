import React from 'react'
import Accordion from '../../../ui/Accordion/Accordion'
import MultiRangeSlider from '../../../ui/inputs/RangeInput/MultiRangeSlider'
export default function FilterByRange({ min, max, val, headline }) {
  return (
    <div className="price-filter xsmall-text text-main text-black up-case">

      <Accordion
        headline={headline} 
        dataLength={1}
        elHeight={65}
        isOpen={true}
      >
        <MultiRangeSlider
          min={min}
          max={max}
          val={val}
        />
      </Accordion>

    </div>
  )
}
