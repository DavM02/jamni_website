import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProductImageSlider({ images }) {
  const [activeImage, setActiveImage] = useState(0);
  console.log(images && images.slice(1))
  return (
    <div className="product-image-slider row gap-35">
      <div className="column center-x center-y gap-15">
        {Array(5).fill(null).map((el, i) => {
          return <div className={
            `dot ${i === activeImage ? 'active' : 'inactive'}`
          } key={i} onClick={() => setActiveImage(i)}></div>
        })}
      </div>
      <div>

        <div className="main-image">
          {
            images && images.slice(1).map((el, i) => {
              return <div
                style={{ left: `calc(100% * (${i - activeImage})` }}
                key={i}>
                <LazyLoadImage
                  width="100%"
                  height="100%"
                  effect="blur"
                  src={el}
                  alt={`product-image-${i + 1}`}
                />
              </div>
            })
          }
        </div>

        <div className="thumbnail-images gap-10">
          {images && images.slice(1).map((el, i) => {
            return <div className="thumbnail-image" 
            style={{opacity: activeImage === i ? 0.3 : 1}}
            key={i} onClick={() => setActiveImage(i)}>
              <LazyLoadImage
                width="100%"
                height="100%"
                effect="blur"
                src={el}
                alt={`product-image-${i}`}
              />
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
