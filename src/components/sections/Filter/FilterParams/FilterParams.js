import FilterByDescription from "../FilterBy/FilterByDescription";
import FilterByColors from "../FilterBy/FilterByColors";
import FilterByRange from "../FilterBy/FilterByRange";
import "./params.css";
import { useParams } from "react-router-dom";
import catalog from "../../../../data/catalog";
import ExtraFilter from "../FilterBy/ExtraFilter";
export default function FilterParams() {
  const { catalog: path } = useParams();

  return (
    <>
      <FilterByDescription headline={catalog[path].filterHeadline} />
      <ExtraFilter
        filterParam={"collection"}
        headline={"коллекции"}
        data={catalog[path].collections}
      />
      <ExtraFilter
        filterParam={"material"}
        headline={"материал"}
        data={catalog[path].materials}
      />
      {catalog[path].filters.map(([key, val, param], i) => {
        return (
          <FilterByRange
            key={key}
            filterParam={param}
            min={val.min}
            val={val.val}
            max={val.max}
            headline={key}
          />
        );
      })}
      <FilterByColors />
      {catalog[path].extraFilters &&
        catalog[path].extraFilters.map(([key, val, param], i) => {
          return (
            <ExtraFilter
              key={key}
              headline={key}
              filterParam={param}
              data={val}
              // isOpen={false}
            />
          );
        })}
    </>
  );
}
