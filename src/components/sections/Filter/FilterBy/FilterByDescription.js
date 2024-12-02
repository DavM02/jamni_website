import useFilter from "../../../../hooks/useFilter";

export default function FilterByDescription({ headline }) {
  const { allFilterParams, resetFilter, handleSearchParams } =
    useFilter("description");

  const filterItems = [
    { label: headline, value: "" },
    { label: "скидки", value: "discount" },
    { label: "новинки", value: "isNew" },
    { label: "бестселлеры", value: "bestseller" },
  ];

  return (
    <div className="main-filter column gap-15 xsmall-text text-main text-black up-case">
      {filterItems.map(({ label, value }) => {
        const isActive = allFilterParams.includes(value) || (value === "" && allFilterParams.length === 0);
        return (
          <span
            key={value}
            className={isActive ? "active" : "inactive"}
            onClick={() => value ? handleSearchParams(value) : resetFilter("description")}
          >
            {label}
          </span>
        );
      })}
    </div>
  );
}
