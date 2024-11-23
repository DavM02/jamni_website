import React from 'react'
import FilterParam from '../FilterParam'
import FilterAccordion from '../FilterAccordion'
export default function FilterByMaterial({ materials }) {
    return (
        <div className="material-filter xxsmall-text text-main text-black">
            <FilterAccordion
                headline="материал"
                dataLength={materials.length}
                elHeight={20}>
                <FilterParam
                    filterParam={"material"}
                    data={materials}
                />
            </FilterAccordion>
        </div>
    )
}
