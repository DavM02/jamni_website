import { useSearchParams } from "react-router-dom";

export const colorMap = {
    "серый": "palette-gray-light",
    "черный": "black",
    "коричневый": "palette-brown",
    "белый": "white",
    "бежевый": "palette-beige",
    "зеленый": "palette-green",
    "темно-серый": "palette-gray",
    "светло-коричневый": "palette-brown-light",
  };

export default function useFilter(filterParam) {
  const [searchParams, setSearchParams] = useSearchParams();
  const allFilterParams = searchParams.getAll(filterParam) ?? [];

  const rangeParams = ["minprice", "maxprice", "minwidth", "maxwidth", "mindepth", "maxdepth"];

  function resetFilter(filterValue) {
    searchParams.delete(filterValue);
    setSearchParams(searchParams);
  }

  function handleSearchParams(filterValue) {
    const newSearchParams = new URLSearchParams(searchParams);

    if (rangeParams.includes(filterParam)) {
      newSearchParams.set(filterParam, filterValue);
      setSearchParams(newSearchParams);
      return;
    }

    const values = newSearchParams.getAll(filterParam);

    if (values.includes(filterValue)) {
      const newValues = values.filter((value) => value !== filterValue);
      newSearchParams.delete(filterParam);
      newValues.forEach((value) => newSearchParams.append(filterParam, value));
    } else {
      newSearchParams.append(filterParam, filterValue);
    }
    setSearchParams(newSearchParams);
  }

  function handleFilter(mutate) {
    const filters = {};
    const descriptions = [];
    const selectedColors = [];

    let minPrice = null, maxPrice = null;
    let minWidth = null, maxWidth = null;
    let minDepth = null, maxDepth = null;

    for (const [key, value] of searchParams.entries()) {
      if (key !== "page") {
        if (key === "minprice") minPrice = parseFloat(value) || 0;
        else if (key === "maxprice") maxPrice = parseFloat(value) || 250000;
        else if (key === "minwidth") minWidth = parseFloat(value) || 0;
        else if (key === "maxwidth") maxWidth = parseFloat(value) || 10000;
        else if (key === "mindepth") minDepth = parseFloat(value) || 0;
        else if (key === "maxdepth") maxDepth = parseFloat(value) || 10000;
        else if (key === "description") descriptions.push(value);
        else if (key === "colors") selectedColors.push(colorMap[value]);
        else filters[key] = filters[key] ? [...filters[key], value] : [value];
      }
    }

    mutate((data) => {
      return data.map((el) => {
        const matchQuery = Object.entries(filters).every(([key, values]) =>
          values.includes(el[key])
        );
        const matchDescription = descriptions.every(
          (desc) => el[desc] === true
        );
        const matchPrice =
          (maxPrice ? el.price <= maxPrice : true) &&
          (minPrice ? el.price >= minPrice : true);
        const matchWidth =
          (maxWidth ? el.width <= maxWidth : true) &&
          (minWidth ? el.width >= minWidth : true);
        const matchDepth =
          (maxDepth ? el.depth <= maxDepth : true) &&
          (minDepth ? el.depth >= minDepth : true);
        const matchColors =
          selectedColors.length === 0 ||
          el.colors.some((color) => selectedColors.includes(color));

        return {
          ...el,
          isShown:
            matchQuery &&
            matchDescription &&
            matchPrice &&
            matchWidth &&
            matchDepth &&
            matchColors,
        };
      });
    }, false);
  }

  return {
    handleSearchParams,
    handleFilter,
    resetFilter,
    allFilterParams,
  };
}
