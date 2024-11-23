import React from 'react'
import FilterAccordion from '../FilterAccordion'
import FilterParam from '../FilterParam'
export default function FilterByColors() {
    const colors = ['cерый', 'черный', 'коричневый', 'белый', 'бежевый', 'зеленый', 'темно-серый']
    return (

        <div className="colors-filter xxsmall-text text-main text-black">
            <FilterAccordion
                headline="цвет"
                dataLength={7}
                elHeight={20}>
                <FilterParam
                    filterParam={"colors"}
                    data={colors}

                />
            </FilterAccordion>
        </div>
    )
}
