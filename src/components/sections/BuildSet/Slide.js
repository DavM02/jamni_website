import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Slide({ el, ...props }) {

  const [count, setCount] = useState(0)

  return (
    <div className={`column display-num center-y ${el.slideId % 2 !== 0 ? 'to-bottom' : 'to-top'}`}

      data-num={count}

    >
      <div className="slider-image">
        <LazyLoadImage
          width="100%"
          height="100%"
          effect="blur"
          src={el.images[1]}
          alt={el.name}
        />
      </div>
      <span className="small-text text-main text-center text-black up-case">{el.product.split(' ')[1]} {el.name}</span>
      <span className="xsmall-text text-main text-gray">
        {el.price.toLocaleString("ru-RU")} руб
      </span>
      <div className="grid-3 xsmall-text text-main text-black">
        <button className="center-gr" onClick={(e) => {
          setCount((prev) => Math.max(0, prev - 1))
           if(count > 0) {
             props.decreaseQuantity(el.id, count)
           }
        }}>
          -
        </button>
        <span className="center-gr">{count}</span>
        <button className="center-gr" onClick={(e) => {
          setCount((prev) => Math.min(9, prev + 1))
          if(count < 9) {
            props.addProduct(null, null, el)
          }
        }}>
          +
        </button>
      </div>
    </div>
  );
}
