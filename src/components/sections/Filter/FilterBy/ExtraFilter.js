
import FilterParam from '../FilterParams/FilterParam'
import Accordion from '../../../ui/Accordion/Accordion'
export default function ExtraFilter({ isOpen=true, data, headline, filterParam }) {
    return (
        <div className="xxsmall-text text-main text-black">
            <Accordion
                headline={headline}
                dataLength={data.length}
                elHeight={20}
                isOpen={isOpen}
            >
                <FilterParam
                    filterParam={filterParam}
                    data={data}
                />
            </Accordion>
        </div>
    )
}
