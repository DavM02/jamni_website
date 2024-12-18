import React from "react";
import InfiniteSlider from "../InfiniteSlider/InfiniteSlider";
import arrow from "../../assets/icons/arrow-up.svg";
import Slide from "./Slide";
import { memo, useState } from "react";
import { cartModalStore } from "../../stores/cartModalStore";

function Recommendations() {
    const [showRecs, setShowRecs] = useState(true);
    const { cartRecommendations } = cartModalStore()
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
            {cartRecommendations.length > 0 && (
                <ul
                    className="recommendations"
                    style={{ height: showRecs ? "170px" : "0px" }}
                >
                    <InfiniteSlider
                        sliderData={cartRecommendations.map((el) => ({
                            ...el,
                            catalog: "decor",
                        }))}
                        wrapper={Slide}
                         itemWidth={'rec-slider-width'}
                         Tag="li"
                    />
                </ul>
            )}
        </div>
    );
}


export default  memo(Recommendations)