import { useSearchParams } from "react-router-dom";

export default function useFilter(filterParam) {
  const [searchParams, setSearchParams] = useSearchParams();
  const allFilterParams = searchParams.getAll(filterParam) ?? [];

  function resetFilter(filterValue) {
    searchParams.delete(filterValue);
    setSearchParams(searchParams);
  }

  function handleSearchParams(filterValue) {
    const newSearchParams = new URLSearchParams(searchParams);

    if (filterParam === "min" || filterParam === "max") {
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

    let min = null;
    let max = null;

    const colorMap = {
      серый: "palette-gray-light",
      черный: "black",
      коричневый: "palette-brown",
      белый: "white",
      бежевый: "palette-beige",
      зеленый: "palette-green",
      "темно-серый": "palette-gray",
      "светло-коричневый": "palette-brown-light",
    };

    const selectedColors = [];

    for (const [key, value] of searchParams.entries()) {
      if (key !== "page") {
        if (key === "min") {
          min = parseFloat(value) || 0;
        } else if (key === "max") {
          max = parseFloat(value) || 250000;
        } else if (key === "description") {
          descriptions.push(value);
        } else if (key === "colors") {
          selectedColors.push(colorMap[value]);
        } else {
          filters[key] = filters[key] ? [...filters[key], value] : [value];
        }
      }
    }

    mutate((data) => {
      console.log("again");
      return data.map((el) => {
        const matchQuery = Object.entries(filters).every(([key, values]) =>
          values.includes(el[key])
        );
        const matchDescription = descriptions.every(
          (desc) => el[desc] === true
        );
        const matchPrice =
          (max ? el.price <= max : true) && (min ? el.price >= min : true);
        const matchColors =
          selectedColors.length === 0 ||
          el.colors.some((color) => selectedColors.includes(color));

        return {
          ...el,
          isShown: matchQuery && matchDescription && matchPrice && matchColors,
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
