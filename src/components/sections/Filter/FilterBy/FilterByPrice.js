import React from 'react'
import FilterAccordion from '../FilterAccordion'
import MultiRangeSlider from '../../../ui/RangeInput/MultiRangeSlider'
export default function FilterByPrice() {
  return (
    <div className="price-filter xsmall-text text-main text-black up-case">

      <FilterAccordion
        headline="цена"
        dataLength={1}
        elHeight={100}>
        <MultiRangeSlider
          min={50000}
          max={250000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}

        />
      </FilterAccordion>

    </div>
  )
}
