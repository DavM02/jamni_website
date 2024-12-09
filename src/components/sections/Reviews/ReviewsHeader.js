import React, { useMemo } from 'react'
import ReviewStarIcon from './ReviewStarIcon'

export default function ReviewsHeader({ reviewsCount }) {
    const totalRate = useMemo(() => (reviewsCount.reduce((prev, cur) => { return prev + cur }, 0) / reviewsCount.length).toFixed(1), [])


    const allRates = useMemo(() => {
        
        let ratesMap = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        }
        reviewsCount.forEach(review => ratesMap[review]++)
        return ratesMap
    }, [])

 
    return (
        <div className='reviews-header row wrap center-y s-between gap-20'>
            <div>
                <div className='row gap-15 center-y'>
                   <div className='total-rate text-main text-black'>
                        {totalRate}
                   </div>
                    <div className='reviews-stars'>
                        <div className='row gap-5'>
                            {Array(5).fill(null).map((star, i) => {
                                return <ReviewStarIcon key={i} filled={false} />
                            })}
                        </div>
                        <div className='reviews-stars-mask row gap-5' style={{ clipPath: `inset(0 ${100 - (totalRate / 5) * 100}% 0 0)` }}
                        >
                            {Array(5).fill(null).map((star, i) => {
                                return <ReviewStarIcon key={i} filled={true} />
                            })}
                        </div>
                    </div>
                </div>
                <span className='xxsmall-text text-main'>
                    На основе {reviewsCount.length} отзывов
                </span>
            </div>
            <div className='row wrap gap-10'>
                {Object.values(allRates).reverse().map((el, i) => {
                    return <div className='review-output row gap-5 center-y text-main text-gray xsmall-text' key={i}>
                        {Math.abs(5-i)} <ReviewStarIcon filled={false} /> {`(${el})`}
                    </div>
                })}
            </div>
        </div>
    )
}
