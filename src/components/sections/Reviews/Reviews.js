import React, { useEffect } from 'react'
import './reviews.css'
import useSWRImmutable from 'swr/immutable';
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { getReviewsCount } from '../../../db/loadData';
import FetchError from '../../ui/messages/FetchError';
import Pagination from '../../ui/Pagination/Pagination';
import useFilter from '../../../hooks/useFilter';
import ReviewsDisplay from './ReviewsDisplay';
import ReviewsHeader from './ReviewsHeader';
export default function Reviews() {

    const [searchParams] = useSearchParams();

    const page = parseInt(searchParams.get("page") ?? 1);

    const { data, error, isLoading, mutate } = useSWRImmutable([
        "reviews",
        page,
        12,
    ]);

    const { data: reviewsCount } = useSWRImmutable(["reviews-count"], getReviewsCount);
    const { handleFilter } = useFilter();

    useEffect(() => {
        if (!data) return;
        handleFilter(mutate);
    }, [searchParams, isLoading]);


    return (
        <section id='reviews'>
            <div className="container" >
                <div className='row gap-10 xxxsmall-text text-main text-black up-case'>
                    <Link className='text-gray' to={'/'}>
                        Главная
                    </Link>
                    <span>/</span>
                    <span>отзывы</span>
                </div>
                {reviewsCount && <ReviewsHeader reviewsCount={reviewsCount} />}
                <ReviewsDisplay
                    error={error}
                    isLoading={isLoading}
                    searchParams={searchParams}
                    data={data}
                />
                {reviewsCount && (
                    <Pagination
                        scrollOffset={350}
                        pagesCount={Math.ceil((reviewsCount.length - 1) / 12)}
                        scrollElem={'#reviews'}
                    />
                )}
            </div>
        </section>
    )
}
