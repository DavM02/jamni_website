import React from "react";
import InfiniteSlider from "../InfiniteSlider/InfiniteSlider";
import arrow from "../../assets/icons/arrow-up.svg";
import Slide from "./Slide";
import { AnimatePresence } from "framer-motion";
import { memo, useState } from "react";
import { cartModalStore } from "../../stores/cartModalStore";
import FetchError from "../ui/messages/FetchError";
import DataLoading from "../ui/messages/DataLoading";
import SmoothAppearance from "../ui/SmoothAppearance";

function Recommendations() {
    const [showRecs, setShowRecs] = useState(true);
    const { cartRecommendations, error, isLoading } = cartModalStore()
 
     return (
        <div className="show-recommendations">
            <div
                className="row center-y gap-5"
                onClick={() =>{ setShowRecs((prev) => !prev);

                }}
            >
                <span className="xsmall-text text-main text-black up-case">
                    Рекомендации для вас
                </span>
                <img
                    style={{ transform: !showRecs ? "rotate(180deg)" : "none" }}
                    src={arrow}
                    alt="arrow"
                />
            </div>
             <div className="recommendations"
                 style={{ height: showRecs ? "170px" : "0px" }}>
             <AnimatePresence mode="wait">
                 {error ? (
                     <FetchError message={error.message ?? error} />
                 ) : cartRecommendations.length > 0 && !isLoading ? (
                         <SmoothAppearance
                         >
                             <InfiniteSlider
                                 sliderData={cartRecommendations.map((el) => ({
                                     ...el,
                                     catalog: "decor",
                                 }))}
                                 wrapper={Slide}
                                 itemWidth={'rec-slider-width'}

                             />
                         </SmoothAppearance>
                 ) : (
                     <DataLoading />
                 )}
             </AnimatePresence>
             </div>
        </div>
    );
}


export default  memo(Recommendations)