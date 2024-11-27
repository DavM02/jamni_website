import FilterAccordion from '../FilterAccordion'
import FilterParam from '../FilterParam'
export default function FilterByColors() {
     const colors =   ['серый', 'черный', 'коричневый', 'белый', 'бежевый', 'зеленый', 'темно-серый', 'светло-коричневый']
  


    return (

        <div className="colors-filter xxsmall-text text-main text-black">
            <FilterAccordion
                headline="цвет"
                dataLength={8}
                elHeight={20}
                isOpen={true}
                >
                <FilterParam
                    filterParam={"colors"}
                    data={colors}

                />
            </FilterAccordion>
        </div>
    )
}
