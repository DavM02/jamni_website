import Accordion from '../../../ui/Accordion/Accordion'
import FilterParam from '../FilterParams/FilterParam'
export default function FilterByCollection({ collections }) {
    return (
        <div className="collection-filter xsmall-text text-main text-black up-case">

            <Accordion
                headline="коллекции"
                dataLength={collections.length}
                elHeight={30}
                isOpen={true}
                >
                <FilterParam
                    filterParam={"collection"}
                    data={collections}
                />
            </Accordion>

        </div>
    )
}
