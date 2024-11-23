import FilterByDescription from "./FilterBy/FilterByDescription";
import FilterByCollection from "./FilterBy/FilterByCollection";
import FilterByMaterial from "./FilterBy/FilterByMaterial";
import FilterByColors from "./FilterBy/FilterByColors";
import FilterByPrice from "./FilterBy/FilterByPrice";


export default function FilterParams({ collections, materials, headline }) {
    return (
        <div className="filter-params">
            <FilterByDescription headline={headline} />
            <FilterByCollection collections={collections} />
            <FilterByMaterial materials={materials} />
   
             <FilterByPrice/>
            <FilterByColors />
        </div>
    );
}
