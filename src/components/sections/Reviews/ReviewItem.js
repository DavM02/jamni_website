import React from 'react'
import ReviewStarIcon from './ReviewStarIcon'

export default function ReviewItem({ el }) {
    return (
        <div className='review-item text-main'>
            <span className='small-text text-black'>{el.name}</span>
            <span className='xxsmall-text'>верифицирован</span>
            <div className='row wrap gap-20 s-between center-y'>
                <div className='reviews-stars row gap-5'>
                    {Array(5).fill(null).map((star, i) => {
                        return <ReviewStarIcon key={i} filled={i+1 <= el.review} />
                    })}
                </div>
                <span className='xxsmall-text'>
                    {el.date}
                </span>
            </div>
 
            {el.comment.map((el, i) => {
                return <p className='text-black xsmall-text' key={i}>
                    {el}
                </p>
            })}
            {
                el.image && <div className='review-image' style={{background: `url(${el.image})`}}></div>
            }
            <span className='xxsmall-text text-black'>
                {el.product}
            </span>
        </div>
    )
}
