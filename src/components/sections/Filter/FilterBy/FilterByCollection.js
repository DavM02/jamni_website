import React from 'react'
import FilterAccordion from '../FilterAccordion'
import FilterParam from '../FilterParam'
export default function FilterByCollection({ collections }) {
    return (
        <div className="collection-filter xsmall-text text-main text-black up-case">

            <FilterAccordion
                headline="коллекции"
                dataLength={collections.length}
                elHeight={30}>
                <FilterParam
                    filterParam={"collection"}
                    data={collections}
                />
            </FilterAccordion>

        </div>
    )
}
