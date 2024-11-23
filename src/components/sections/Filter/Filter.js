import React, { useEffect } from "react";
import "./filter.css";
import { useLocation, useSearchParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { getLength } from "../../../db/loadData";
import FilterPagination from "./FilterPagination";
import useFilter from "../../../hooks/useFilter";
import FilterParams from "./FilterParams";
import FilterDisplay from "./Grid/FilterDisplay";


export default function Filter({ collections, materials, headline }) {
    const location = useLocation();
    const key = location.pathname.split("/")[2];

    const [searchParams] = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? 1);

    const { data, error, isLoading, mutate } = useSWRImmutable([key, page]);
    const { data: dataLength } = useSWRImmutable([key], getLength);
    const { handleFilter } = useFilter();

    useEffect(() => {
        if (!data) return;
        handleFilter(mutate);

    }, [searchParams, isLoading]);

    return (
        <section id="filter">
            <div className="container">
                <div className="section-layout">
                    <FilterParams
                        collections={collections}
                        materials={materials}
                        headline={headline}
                    />
                    <FilterDisplay
                        isLoading={isLoading}
                        searchParams={searchParams}
                        data={data}
                        error={error}
                    />

                    {error && (
                        <div className="row center-x center-y">
                            <h2>{error.message}</h2>
                        </div>
                    )}
                    {dataLength && (
                        <FilterPagination pagesCount={Math.ceil(dataLength / 17)} />
                    )}
                </div>
            </div>
        </section>
    );
}