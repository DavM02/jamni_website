import React, { useEffect } from 'react';
import FilterGrid from './Grid/FilterGrid';
import FilterParams from './Params/FilterParams';
import './filter.css';
import { useLocation, useSearchParams } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import { getLength } from '../../../db/loadData';
import SmoothAppearance from '../../ui/SmoothAppearance';
import { AnimatePresence } from 'framer-motion';
import FilterPagination from './FilterPagination'
import useFilter from '../../../hooks/useFilter';
export default function Filter({ collections, materials }) {
    const location = useLocation();
    const key = location.pathname.split('/')[2]

    const [searchParams] = useSearchParams()

    const page = parseInt(searchParams.get('page') ?? 1)


    const { data, error, isLoading, mutate } = useSWRImmutable([key, page]);
    const { data: dataLength, } = useSWRImmutable([key], getLength,);
    const { handleFilter } = useFilter()

    useEffect(() => {
        if(!data) return
        handleFilter(mutate)
 
    }, [data])


    return (
        <section id="filter">
            <div className="container">
                <div className="section-layout">
                    <FilterParams
                        materials={materials}
                        collections={collections} />

                    <AnimatePresence mode='wait'>
                        {
                            !isLoading ?
                                <SmoothAppearance key={searchParams}>
                                    {
                                        !error && (data && data.length > 0 ?

                                            <FilterGrid
                                                data={data} />

                                            : <div className='row center-x center-y'>
                                                <h2>No page found</h2>
                                            </div>)
                                    }
                                </SmoothAppearance> :
                                <SmoothAppearance>
                                    <div className='row center-x center-y'>
                                        <h2>Loading...</h2>
                                    </div>
                                </SmoothAppearance>
                        }

                    </AnimatePresence>

                    {error && <div className='row center-x center-y'>
                        <h2>{error.message}</h2>
                    </div>}
                    {dataLength && <FilterPagination pagesCount={Math.ceil(dataLength / 17)} />}
                </div>
            </div>
        </section>
    );
}
