import useFilter from "../../../hooks/useFilter";

export default function NewsFilter() {
  const { handleSearchParams, resetFilter, allFilterParams } = useFilter("tag");

  const filterItems = [
    { label: "все новости", value: "" },
    { label: "тренды", value: "тренды" },
    { label: "вдохновение", value: "вдохновение" },
    { label: "обзоры", value: "обзоры" },
    { label: "технологии", value: "технологии" },
  ];

  return (
    <div className="news-filter row center-x xsmall-text text-main text-gray up-case">
      <div className="row wrap">
        {filterItems.map(({ label, value }) => {
          const isActive = allFilterParams.includes(value) || (value === "" && allFilterParams.length === 0);
          return (
            <div
              key={value}
              className={`news-filter-item ${isActive ? "active" : "inactive"}`}
              onClick={() => value ? handleSearchParams(value) : resetFilter("tag")}
            >
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
