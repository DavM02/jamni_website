import React, { useEffect, useState } from "react";
import "./filter.css";
import { useSearchParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { getLength } from "../../../db/loadData";
import useFilter from "../../../hooks/useFilter";
import FilterParams from "./FilterParams/FilterParams";
import FilterDisplay from "./Grid/FilterDisplay";
import FilterHeader from "./FilterHeader";
import useMediaQ from '../../../hooks/useMediaQ';
import './media.css'
import { AnimatePresence } from "framer-motion";
import SmoothAppearance from "../../ui/SmoothAppearance";
import Pagination from "../../ui/Pagination/Pagination";

export default function Filter({ path }) {



    const [searchParams] = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? 1);

    const { data, error, isLoading, mutate } = useSWRImmutable([path, page, 18]);
    const { data: dataLength } = useSWRImmutable([path], getLength);
    const { handleFilter } = useFilter();
    const [showParams, setShowParams] = useState(false)

    useEffect(() => {
        if (!data) return;
        handleFilter(mutate);

    }, [searchParams, isLoading]);

    const isDesktop = useMediaQ('(max-width: 1023px)');
    const isMobile = useMediaQ('(max-width: 480px)');
 
    return (
        <section id="filter">
            <div className="container" >
                <FilterHeader
                    isMobile={isMobile}
                    setShowParams={setShowParams}
                    query={isDesktop && !isMobile}
                />
                <div className="section-layout" >
                    <AnimatePresence initial={false} mode="wait">
                        {((!isDesktop && !isMobile) || showParams) &&
                            <SmoothAppearance blur={true} className="filter-params">
                                <FilterParams />
                            </SmoothAppearance>}
                    </AnimatePresence>
                    <FilterDisplay
                        error={error}
                        isLoading={isLoading}
                        searchParams={searchParams}
                        data={data}
                    />
                    {dataLength && (
                        <Pagination
                            scrollOffset={780}
                            pagesCount={Math.ceil(dataLength / 18)} />
                    )}
                </div>
            </div>
        </section>
    );
}