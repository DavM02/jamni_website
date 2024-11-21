import Main from './Main';
import FilterAccordion from './FilterAccordion';

export default function FilterParams({ collections, materials }) {



  return (
    <div className="filter-params">
      <Main
        headline="весь декор"
      />
      <div className="collections-filter xsmall-text text-main text-black up-case">
        <FilterAccordion
          elHeight={30}
          headline="коллекции"
          filterParam={"collection"}
          data={collections}
        />
      </div>
      <div className="materials-filter xxsmall-text text-main text-black">
        <FilterAccordion
          elHeight={20}
          headline="материал"
          filterParam={"material"}
          data={materials}
        />
      </div>
    </div>
  );
}
