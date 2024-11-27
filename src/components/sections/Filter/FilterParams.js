import FilterByDescription from "./FilterBy/FilterByDescription";
import FilterByCollection from "./FilterBy/FilterByCollection";
import FilterByMaterial from "./FilterBy/FilterByMaterial";
import FilterByColors from "./FilterBy/FilterByColors";
import FilterByPrice from "./FilterBy/FilterByPrice";
 

export default function FilterParams({ data}) {
 
    return (
        <>
            <FilterByDescription headline={data.headline} />
            <FilterByCollection collections={data.collections} />
            <FilterByMaterial materials={data.materials} />
            <FilterByPrice
                min={data.price.min}
                val={data.price.val}
                max={data.price.max}
            />
            <FilterByColors />
        </>
    );
}
