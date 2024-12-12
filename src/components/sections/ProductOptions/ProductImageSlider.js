import { AnimatePresence } from "framer-motion";
import { act, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SmoothAppearance from "../../ui/SmoothAppearance";

export default function ProductImageSlider({ images }) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="product-image-slider">
      <AnimatePresence mode="wait">
        <SmoothAppearance key={activeImage} className="main-image">
          <LazyLoadImage
            width="100%"
            height="100%"
            effect="blur"
            src={images[activeImage]}
            alt={`product-image-${activeImage}`}
          />
        </SmoothAppearance>
      </AnimatePresence>
      <div className="thumbnail-images"></div>
    </div>
  );
}
