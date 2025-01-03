import React from 'react'
import InfiniteSlider from '../../InfiniteSlider/InfiniteSlider'
import { AnimatePresence } from 'framer-motion'
import FetchError from '../../ui/messages/FetchError'
import DataLoading from '../../ui/messages/DataLoading'
import SmoothAppearance from '../../ui/SmoothAppearance'
import Slide from './Slide'
import { useParams } from 'react-router-dom'
import useSWRImmutable from 'swr/immutable'
export default function MoreProducts({ headline = "еще товары" }) {


    const param = useParams();
    const catalog = param["*"].split("/")[0];
    const { data, error, isLoading } = useSWRImmutable([
        catalog,
        1,
        10
    ]);
    return (
        <section id='more-products'>
            <div className='container'>
                <div className='text-center'>
                    <h2>{headline}</h2>

                    <span className='small-text text-main text-black up-case'>вам может понравиться</span>
                </div>
                <AnimatePresence mode='wait'>
                    {error ? (
                        <FetchError message={error.message} />
                    ) : (
                        !isLoading && data ? <>
                            <SmoothAppearance>
                                <InfiniteSlider itemWidth={'moreitems-slider-img-width'}
                                    sliderData={data.map((el) => ({
                                        ...el,
                                        catalog,
                                    }))}
                                    wrapper={Slide} />
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
