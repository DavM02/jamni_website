import React from 'react'
import './moreArticles.css'
import InfiniteSlider from '../../InfiniteSlider/InfiniteSlider'
import useSWRImmutable from 'swr/immutable'
import Slide from './Slide'
import DataLoading from '../../ui/messages/DataLoading'
export default function MoreArticles() {


    const { data, } = useSWRImmutable([
        "news",
        1,
        16,
    ]);
 
    return (
        <section id='more-articles'>
            <div className='container'>
                <div className='text-center'>
                    <h2>еще статьи</h2>
                    <span className='small-text text-main text-black up-case'>вам может понравиться</span>
                </div>
                {
                    data ? <InfiniteSlider sliderData={data.slice(0, 10)} wrapper={Slide} /> : <DataLoading/>
                }
            </div>
        </section>
    )
}
