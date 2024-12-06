import React, { useState, useCallback } from 'react';
import sortIcon from '../../../../assets/icons/sort.svg';
import './sort.css';
import SmoothAppearance from '../../../ui/SmoothAppearance';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useSearchParams } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';

const SORT_OPTIONS = {
    popularity: (a, b) => a.rating - b.rating,
    descending: (a, b) => a.price - b.price,
    ascending: (a, b) => b.price - a.price,
};

export default function Sort() {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState(null);

    const location = useLocation();
    const key = location.pathname.split('/')[2];
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') ?? 1);
    const { mutate } = useSWRImmutable([key, page, 18]);

    const handleSort = useCallback((sortType) => {
        setSort(sortType);
        mutate((data) => {
            if (!data) return data;
            return [...data].sort(SORT_OPTIONS[sortType]);
        }, false);
    }, [mutate]);

    return (
        <div className="sorting row gap-5 center-y" onClick={() => setOpen((prev) => !prev)}>
            <img src={sortIcon} alt="sort" />
            <span>Сортировка</span>
            <AnimatePresence mode="wait">
                {open && (
                    <SmoothAppearance className="sorting-params column gap-15 xsmall-text text-main text-black" blur={true}>
                        {Object.entries({
                            popularity: 'Популярность',
                            descending: 'Цена: наименьшая',
                            ascending: 'Цена: наибольшая',
                        }).map(([key, label]) => (
                            <div key={key}>
                                <span
                                    className={sort === key ? 'active' : 'inactive'}
                                    onClick={handleSort.bind(null, key)}  
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </SmoothAppearance>
                )}
            </AnimatePresence>
        </div>
    );
}
