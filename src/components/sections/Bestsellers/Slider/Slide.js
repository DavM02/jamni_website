import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Slide({ el }) {
  return (
    <>
      <div className="slider-image">
        <LazyLoadImage
          // visibleByDefault={true}
          src={el.image}
          width={"100%"}
          height={"100%"}
          effect="blur"
          alt={`slider-image-${el.id + 1}`}
        />
      </div>
      <span className="small-text text-main text-black-secondary up-case">
        {el.name}
      </span>
    </>
  );
}
