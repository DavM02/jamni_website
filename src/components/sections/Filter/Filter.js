import React from 'react';
import FilterDisplay from './FilterDisplay';
import FilterParams from './FilterParams';
import './filter.css';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import { getLength } from '../../../db/LoadData';

export default function Filter() {
    const location = useLocation();
    const key = location.pathname.split('/')[2]
    console.log(key)
    const [searchParams, setSeatchParams] = useSearchParams()
    // const { page } = useParams();   
    const page = parseInt(searchParams.get('page') ?? 1)
    // const q = page ?? 1;
 

    const { data, error, isLoading } = useSWRImmutable([key, page]);
    const { data: dataLength, } = useSWRImmutable([key], getLength);
 
    // if (isLoading) return <div>Загрузка...</div>;
    // if (error) return <div>Ошибка: {error.message}</div>;


    return (
        <section id="filter">
            <div className="container">
                <div className="section-layout">
                    <FilterParams />
                    {
                        dataLength && <FilterDisplay
                            dataLength={dataLength}
                            data={data} />
                    }

                </div>
            </div>
        </section>
    );
}
