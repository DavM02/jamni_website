import React, { useState } from 'react'
import sortIcon from '../../../assets/icons/sort.svg'
import SmoothAppearance from '../../ui/SmoothAppearance'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useSearchParams } from 'react-router-dom'
import useSWRImmutable from "swr/immutable";

export default function Sort() {

    const [open, setOpen] = useState(null)
    const [sort, setSort] = useState(null)

    const location = useLocation();
    const key = location.pathname.split("/")[2];

    const [searchParams] = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? 1);

    const {  mutate } = useSWRImmutable([key, page]);

    return (
        <div className='sorting row gap-5 center-y'
            onClick={() => setOpen((prev) => !prev)}
        >
            <img src={sortIcon} alt='sort' />
            <span>сортировка</span>
            <AnimatePresence mode='wait'>
                {open && <SmoothAppearance className="sorting-params column gap-15 xsmall-text text-main text-black" blur={true}>
                    <div>
                        <span className={`${sort === 'popularity' ? 'active' : 'inactive'}`} onClick={() => {
                            setSort('popularity')
                            mutate((data) => {
                                const sortedData = data && [...data].sort((a, b) => a.rating - b.rating);
                                return sortedData;
                            }, false);
                        }}>
                            популярность
                        </span>
                    </div>
                    <div>
                        <span className={`${sort === 'descending' ? 'active' : 'inactive'}`} onClick={() => {
                            mutate((data) => {
                                setSort('descending')
                                const sortedData = data && [...data].sort((a, b) => a.price - b.price);
                                return sortedData;
                            }, false);
                        }}>
                            цена: наименьшая
                        </span>
                    </div>
                    <div>

                        <span className={`${sort === 'ascending' ? 'active' : 'inactive'}`} onClick={() => {
                            setSort('ascending')
                            mutate((data) => {
                                const sortedData = data && [...data].sort((a, b) => b.price - a.price);
                                return sortedData;
                            }, false);
                        }}>
                            цена: наибольшая
                        </span>
                    </div>
                </SmoothAppearance>}
            </AnimatePresence>
        </div>
    )
}
