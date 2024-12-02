import React, {useEffect, useCallback, useState} from 'react'
import './reviews.css'
import useSWRImmutable from 'swr/immutable';
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { getReviews } from '../../../db/loadData';
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

    const { data: reviewsCount } = useSWRImmutable(["reviews-count"], getReviews);
    const { handleFilter } = useFilter();
     
    useEffect(() => {
        if (!data) return;
        handleFilter(mutate);
    }, [searchParams, isLoading]);

    const [offsetTop, setOffsetTop] = useState(null)

    const elemRef = useCallback((node) => {
        if (node !== null) {
            setOffsetTop(node.getBoundingClientRect().top)
        }
    }, [])

  return (
    <section id='reviews'>
          <div className="container" ref={elemRef}>
              <div className='row gap-10 xxxsmall-text text-main text-black up-case'>
                  <Link to={'/'}>
                      Главная
                  </Link>
                  <span>/</span>
                  <span>отзывы</span>
              </div>
              {reviewsCount  && <ReviewsHeader reviewsCount={reviewsCount} />}
              {error ? (
                  <FetchError message={error.message} />
              ) : <ReviewsDisplay
                  isLoading={isLoading}
                  searchParams={searchParams}
                  data={data}
              />}
              {reviewsCount && (
                  <Pagination
                      scrollOffset={offsetTop}
                      pagesCount={Math.ceil((reviewsCount.length - 1) / 12)}
                  />
              )}
          </div>
      </section>
  )
}
