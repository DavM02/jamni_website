import React from "react";
import InfiniteSlider from "../InfiniteSlider/InfiniteSlider";
import arrow from "../../assets/icons/arrow-up.svg";
import Slide from "./Slide";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";
import { modalStore } from "../../stores/modalStore";
import FetchError from "../ui/messages/FetchError";
import DataLoading from "../ui/messages/DataLoading";
import SmoothAppearance from "../ui/SmoothAppearance";

function Recommendations() {
 
  const { cartRecommendations, error, isLoading, showRecs, setShowRecs } = modalStore();
   
  return (
    <div className="show-recommendations">
      <div
        className="row center-y gap-5"
        onClick={() => {
          setShowRecs(!showRecs);
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
      <div
        className="recommendations"
        style={{ height: showRecs ? "170px" : "0px" }}
      >
        <AnimatePresence mode="wait">
          {error ? (
            <FetchError message={error.message ?? error} />
          ) : cartRecommendations.length > 0 && !isLoading ? (
            <SmoothAppearance>
              <InfiniteSlider
                  sliderData={cartRecommendations}
                wrapper={Slide}
                itemWidth={"rec-slider-width"}
              />
            </SmoothAppearance>
          ) : (
            <DataLoading style={{ height: "100%" }} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default memo(Recommendations);
