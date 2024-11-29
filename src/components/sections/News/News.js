import React, { useEffect } from "react";

import { useLocation, useSearchParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { getLength } from "../../../db/loadData";
import useFilter from "../../../hooks/useFilter";
import { AnimatePresence } from "framer-motion";
import SmoothAppearance from "../../ui/SmoothAppearance";
import Pagination from "../../ui/Pagination/Pagination";

export default function News() {     

    const [searchParams] = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? 1);

    const { data, error, isLoading, mutate } = useSWRImmutable(['news', page, 16]);
    const { data: dataLength } = useSWRImmutable(['news'], getLength);
    const { handleFilter } = useFilter();

    useEffect(() => {
        if (!data) return;
        handleFilter(mutate);

    }, [searchParams, isLoading]);
    console.log(data)
  

    return (
        <section id="news">
            <div className="container">
                <div className="section-layout">
                    {/* <AnimatePresence mode="wait">
                        <SmoothAppearance blur={true}>
                          </SmoothAppearance>
                    </AnimatePresence>
                    {error && (
                        <div className="row center-x center-y">
                            <h2>{error.message}</h2>
                        </div>
                    )}
                    {dataLength && (
                        <Pagination pagesCount={Math.ceil(dataLength / 17)} />
                    )} */}
                </div>
            </div>
        </section>
    );
}