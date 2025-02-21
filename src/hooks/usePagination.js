import { useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainContext } from '../context/MainContext';
export default function usePagination(pagesCount, scrollElem) {
    const [pages, setPages] = useState(pagesCount > 5 ? [1, 2, 3, 4, 5, '...', pagesCount] :
        Array(pagesCount).fill(null).map((_, i) => i + 1));
    const [searchParams, setSearchParams] = useSearchParams()
    const activePage = parseInt(searchParams.get('page') ?? 1)

    const { scrollbarAccess } = useContext(MainContext)
 

    const handlePagination = (page) => {
        if (page > pagesCount || page <= 0 || page === '...') return;
        const el = document.querySelector(scrollElem)
        if (scrollbarAccess.current) {

            scrollbarAccess.current.scrollIntoView(el, {
                block: 'start',
                alignToTop: true 
            });

        }
        else {


            el.scrollIntoView({ behavior: 'smooth' })
        }

        setTimeout(() => {
            if (pagesCount > 5) {
                if (page >= 5 && page + 2 < pagesCount) {
                    setPages([1, '...', page - 1, page, page + 1, '...', pagesCount]);
                } else if (page + 2 >= pagesCount) {
                    setPages([1, '...', pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]);
                } else {
                    setPages([1, 2, 3, 4, 5, '...', pagesCount]);
                }
            }



            searchParams.set('page', page);
            setSearchParams(searchParams);
        }, 500);

    };

    return { pages, activePage, handlePagination };
}
