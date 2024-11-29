 
import FilterParam from '../FilterParams/FilterParam'
import Accordion from '../../../ui/Accordion/Accordion'
export default function FilterByMaterial({ materials }) {
    return (
        <div className="material-filter xxsmall-text text-main text-black">
            <Accordion
                headline="материал"
                dataLength={materials.length}
                elHeight={20}
                isOpen={true}
                >
                <FilterParam
                    filterParam={"material"}
                    data={materials}
                />
            </Accordion>
        </div>
    )
}
