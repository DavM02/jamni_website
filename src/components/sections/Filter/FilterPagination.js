import React from 'react'
import usePagination from '../../../hooks/usePagination';
import arrowLeft from '../../../assets/icons/pagination-arrow-left.svg'
import arrowRight from '../../../assets/icons/pagination-arrow-right.svg'

export default function FilterPagination({ pagesCount }) {

    const { pages, activePage, handlePagination } = usePagination(pagesCount);
 
    return (
        <div className='filter-pagination'>
            <div className='row gap-30 center-y end-x'>
                <div className='prev' onClick={() => handlePagination(activePage-1)}>
                    <img src={arrowLeft} alt='prev' /> 
                </div>
                <ul className='row gap-10 xsmall-text text-main'>
                    {
                        pages.map((el, i) => (
                            <li 
                            style={{pointerEvents: el !== '...' ? 'all' : 'none'}}
                            className={(activePage == el && el !== '...') ? 'active' : 'inactive'}
                            onClick={() => handlePagination(el)} key={i}>{el}</li>
                        ))
                    }
                </ul>
                <div className='next'
                    onClick={() => handlePagination(activePage+1)}
                ><img src={arrowRight} alt='next' />
                </div>
            </div>
        </div>
    )
}



