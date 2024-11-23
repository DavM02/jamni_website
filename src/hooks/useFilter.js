import { useSearchParams } from "react-router-dom";
export default function useFilter(filterParam) {
    const [searchParams, setSearchParams] = useSearchParams();
    const allFilterParams = searchParams.getAll(filterParam) ?? "";

    function handleSearchParams(filterValue) {
        if (filterValue === 'all') {
            searchParams.delete('description')
            setSearchParams(searchParams);
            return
        }
        const values = searchParams.getAll(filterParam);
        if (values.includes(filterValue)) {
            const newValues = values.filter((value) => value !== filterValue);

            searchParams.delete(filterParam);
            newValues.forEach((value) => searchParams.append(filterParam, value));

            setSearchParams(searchParams);
        } else {
            searchParams.append(filterParam, filterValue);
            setSearchParams(searchParams);
        }
    }


    function handleFilter(mutate) {
        const filters = {};
        const descriptions = [];

        for (const [key, value] of searchParams.entries()) {
            if (key !== "page") {
                if (key === "description") {
                    descriptions.push(value);
                } else {
                    filters[key] = filters[key] ? [...filters[key], value] : [value];
                }
            }
        }

        mutate((data) => {
            return data.map((el) => {
                const matchQuery = Object.entries(filters).every(([key, values]) => values.includes(el[key]));

                if (descriptions.length > 0) {
                    const matchDescription = descriptions.every((desc) => el[desc] === true);
                    return { ...el, isShown: matchQuery && matchDescription };
                }

                return { ...el, isShown: matchQuery };
            });
        }, false);
    }


    return {
        handleSearchParams,
        handleFilter,
        allFilterParams,
    };
}