import React from "react";
import SmoothAppearance from "../../ui/SmoothAppearance";
import InfiniteSlider from "../../InfiniteSlider/InfiniteSlider";
import FetchError from "../../ui/messages/FetchError";
import DataLoading from "../../ui/messages/DataLoading";
import { AnimatePresence } from "framer-motion";
import Slide from "./Slide";
export default function SliderSection({
    currentCategory,
    allData,
    query,
    decreaseQuantity,
    handleAddToCart,
}) {
    const { data, error, loading } = allData[currentCategory];

    return (
        <AnimatePresence mode="wait">
            {error ? (
                <FetchError message={error?.message} />
            ) : data && !loading ? (
                <SmoothAppearance blur={true} key={currentCategory}>
                    <InfiniteSlider
                        hideNav={query}
                        itemWidth={"build-set-slider-img-width"}
                        sliderData={data}
                        wrapper={Slide}
                        decreaseQuantity={decreaseQuantity}
                        addProduct={handleAddToCart}
                    />
                </SmoothAppearance>
            ) : (
                <DataLoading key={"loading"} />
            )}
        </AnimatePresence>
    );
}
