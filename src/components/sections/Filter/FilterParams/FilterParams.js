import FilterByDescription from "../FilterBy/FilterByDescription";
import FilterByCollection from "../FilterBy/FilterByCollection";
import FilterByMaterial from "../FilterBy/FilterByMaterial";
import FilterByColors from "../FilterBy/FilterByColors";
import FilterByRange from "../FilterBy/FilterByRange";
import './params.css'
import { useParams } from "react-router-dom";
import catalog from "../../../../data/catalog";
export default function FilterParams() {

    const { catalog: path} = useParams()

    return (
        <>
            <FilterByDescription headline={catalog[path].filterHeadline} />
            <FilterByCollection collections={catalog[path].collections} />
            <FilterByMaterial materials={catalog[path].materials} />
            {
                catalog[path].filters.map(([key, val], i) => {
                    return <FilterByRange
                    key={key}
                        min={val.min}
                        val={val.val}
                        max={val.max}
                        headline={key}
                    />
                })
            }


            <FilterByColors />
        </>
    );
}
