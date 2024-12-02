import React, { useEffect, useRef, useState } from "react";
import "./filter.css";
import { useLocation, useSearchParams } from "react-router-dom";
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

export default function Filter({ collections, materials, headline, price }) {

    const location = useLocation();
    const key = location.pathname.split("/")[2];

    const [searchParams] = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? 1);

    const { data, error, isLoading, mutate } = useSWRImmutable([key, page, 18]);
    const { data: dataLength } = useSWRImmutable([key], getLength);
    const { handleFilter } = useFilter();
    const [showParams, setShowParams] = useState(false)

    useEffect(() => {
        if (!data) return;
        handleFilter(mutate);

    }, [searchParams, isLoading]);

    const isDesktop = useMediaQ('(max-width: 1023px)');
    const isMobile = useMediaQ('(max-width: 480px)');

 
const parentRef = useRef(null)
 
    return (
        <section id="filter">
            <div className="container">
                <FilterHeader
                    isMobile={isMobile}
                    setShowParams={setShowParams}
                    data={{ collections, materials, headline, price }}
                    query={isDesktop && !isMobile}
                />
                <div className="section-layout" ref={parentRef}>
                    <AnimatePresence initial={false} mode="wait">
                        {((!isDesktop && !isMobile) || showParams) && <SmoothAppearance blur={true} className="filter-params">
                            <FilterParams
                                data={{ collections, materials, headline, price }}
                            /></SmoothAppearance>}
                    </AnimatePresence>
                    <FilterDisplay
                        isLoading={isLoading}
                        searchParams={searchParams}
                        data={data}
                    />
                    {error && (
                        <div className="row center-x center-y">
                            <h2>{error.message}</h2>
                        </div>
                    )}
                    {dataLength && (
                        <Pagination
                        scrollOffset={parentRef.current.offsetTop}
                        pagesCount={Math.ceil(dataLength / 17)} />
                    )}
                </div>
            </div>
        </section>
    );
}