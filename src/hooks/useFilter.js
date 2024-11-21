import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
export default function useFilter(filterParam) {

    const [searchParams, setSearchParams] = useSearchParams()
    const allFilterParams = searchParams.getAll(filterParam) ?? ''

    function handleSearchParams(filterValue) {

        if (filterParam === 'filter' && searchParams.length !== 0 && filterValue === 'all') {
            searchParams.delete(filterParam)
            setSearchParams(searchParams)
            return
        }

        if (allFilterParams.includes(filterValue)) {
            searchParams.delete(filterParam, filterValue)
            setSearchParams(searchParams)
        } else {
            searchParams.append(filterParam, filterValue)
            setSearchParams(searchParams)
        }
    }

    // function handleFilter(mutate) {
    //     const keys = new Set([])
    //     const values = new Set([])

    //     for (const [key, value] of searchParams.entries()) {
    //         if (key !== 'page' && key !== 'filter') {
    //             keys.add(key)
    //             values.add(value)
    //         }
    //     }



    //     mutate((data) => {
    //         return data.map((el) => {
    //             const isMatch = el[keys]
    //             return { ...el, isShown: isMatch };
    //         });
    //     }, false);

    // }

    function handleFilter(mutate) {
        const filters = {}

        for (const [key, value] of searchParams.entries()) {
            if (key !== 'page' && key !== 'filter') {
                if (filters[key]) {
                    filters[key].push(value)
                } else {
                    filters[key] = [value]
                }
            }
        }

        if (Object.keys(filters).length > 0) {
            mutate((data) => {
                return data.map((el) => {
                    const isMatch = Object.entries(filters).every(([key, value]) => {
                        return value.includes(el[key])
                    });

                    return { ...el, isShown: isMatch };
                });
            }, false);
        } else {
            mutate((data) => {
                return data.map((el) => {
                    return { ...el, isShown: true }
                })
            })
        }
    }

    // if (allFilterParams.length === 0) {
    //     mutate((data) => {
    //         return data.map((el) => {
    //             return { ...el, isShown: true };
    //         });
    //     }, false);
    //     return;
    // }

    return (
        {
            handleSearchParams,
            handleFilter,
            allFilterParams
        }
    )
}
