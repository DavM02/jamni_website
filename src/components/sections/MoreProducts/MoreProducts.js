import React, { useMemo } from "react";
import InfiniteSlider from "../../InfiniteSlider/InfiniteSlider";
import { AnimatePresence } from "framer-motion";
import FetchError from "../../ui/messages/FetchError";
import DataLoading from "../../ui/messages/DataLoading";
import SmoothAppearance from "../../ui/SmoothAppearance";
import Slide from "./Slide";
import { useParams, useSearchParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
export default function MoreProducts({ headline = "еще товары" }) {
  const randomCatalog = useMemo(
    () =>
      [
        "outdoor",
        "frameless",
        "bedsheets",
        "curtains",
        "beds",
        "decor",
        "sofas",
        "poufs",
        "chairs",
        "armchairs",
      ][Math.min(9, Math.round(Math.random() * 9))],
    []
  );
  const catalog = useParams().catalog ?? randomCatalog;
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = useParams().product;
  const { data, error, isLoading } = useSWRImmutable([catalog, 1, 16]);

  return (
    <section id="more-products">
      <div className="container">
        <div className="text-center">
          <h2>{headline}</h2>

          <span className="small-text text-main text-black up-case">
            вам может понравиться
          </span>
        </div>
        <AnimatePresence mode="wait">
          {error ? (
            <FetchError message={error.message} />
          ) : !isLoading && data ? (
            <>
              <SmoothAppearance>
                <InfiniteSlider
                  itemWidth={"moreitems-slider-img-width"}
                  catalog={catalog}
                  sliderData={data
                    .filter(
                      (el, i) => el.id !== id && el.name.toLowerCase() !== name
                    )
                    .slice(0, 10)}
                  wrapper={Slide}
                />
              </SmoothAppearance>
            </>
          ) : (
            <DataLoading />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
