import React from 'react'
import './moreArticles.css'
import InfiniteSlider from '../../InfiniteSlider/InfiniteSlider'
import useSWRImmutable from 'swr/immutable'
import Slide from './Slide'
import DataLoading from '../../ui/messages/DataLoading'
import FetchError from '../../ui/messages/FetchError'
import { AnimatePresence } from 'framer-motion'
import SmoothAppearance from '../../ui/SmoothAppearance'
export default function MoreArticles() {


    const { data, error, isLoading } = useSWRImmutable([
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
                <AnimatePresence mode='wait'>
                    {error ? (
                        <FetchError message={error.message} />
                    ) : (
                        !isLoading && data ? <>
                            <SmoothAppearance>
                                    <InfiniteSlider itemWidth={'moreitems-slider-img-width'} sliderData={data.slice(0, 10)} wrapper={Slide} />
                            </SmoothAppearance>
                        </> : (
                            <DataLoading />
                        )
                    )

                    }
                </AnimatePresence>

            </div>
        </section>
    )
}
